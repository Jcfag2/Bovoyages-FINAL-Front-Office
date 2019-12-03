package fr.gtm.bovoyages.rest;

import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;
import java.util.Optional;

import javax.persistence.NoResultException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.gtm.bovoyages.dao.ClientRepository;
import fr.gtm.bovoyages.dao.DatesVoyagesRepository;
import fr.gtm.bovoyages.dao.DestinationRepository;
import fr.gtm.bovoyages.dao.VoyagesRepository;
import fr.gtm.bovoyages.entities.Client;
import fr.gtm.bovoyages.entities.DatesVoyages;
import fr.gtm.bovoyages.entities.Destination;
import fr.gtm.bovoyages.entities.Voyage;
import fr.gtm.bovoyages.util.MailReceptor;

@RestController
public class BovoyagesRestController {
	@Autowired
	ClientRepository clientRepo;
	@Autowired
	DatesVoyagesRepository dvRepo;
	@Autowired
	DestinationRepository destRepo;
	@Autowired
	VoyagesRepository voyageRepo;
	@Autowired
	private JavaMailSender mailSender;

	@GetMapping("/destinations/uniques")
	public List<DatesVoyages> getAllDestinationsMoinsCher() {
		// Récupère les DatesVoyages en base triées par fk_destination et par prix
		// croissant (voir Query dans le repository)
		List<DatesVoyages> avecDoublons = dvRepo.getAllVoyagesOrdered();
		// création d'une liste pour contenir les dates de voyage sans les doublons
		List<DatesVoyages> sansDoublons = new ArrayList<DatesVoyages>();

		long fk = 0;
		long id = 0;

		// on met les dates de voyage au prix le plus faible pour chaque destination
		// dans la nouvelle liste
		for (DatesVoyages a : avecDoublons) {
			if (a.getFk_destination() != fk) {
				sansDoublons.add(a);
				fk = a.getFk_destination();
			}
		}
		// Pour chaque date de voyage dans la liste sans doublons, on récupère le nom de
		// la région (pour affichage sur le site)
		for (DatesVoyages sd : sansDoublons) {
			id = sd.getFk_destination();
			sd.setNmDestination(destRepo.findById(id).get().getRegion());
			try {
			sd.setImageURL(destRepo.findById(id).get().getImages().get(0));
			}catch (IndexOutOfBoundsException e) {
			sd.setImageURL("default-image.png");
			}{
				
			}
		}

		// Renvoi de la liste sans doublon.
		return sansDoublons;

	}

	@GetMapping("/destinations/{id}")
	public Destination getDestinationById(@PathVariable("id") long id) {
		Destination destination = destRepo.findById(id).get();
		return destination;
	}

	@PostMapping("/voyage/new")
	public Voyage createVoyage(@RequestBody Voyage v) {
		// récupération du nombre de places disponibles pour les dates de voyage choisie
		long idDate = v.getDateVoyage().getId();
		double nbPlaces = dvRepo.findById(idDate).get().getNbPlaces();
		v.setDateVoyage(dvRepo.findById(idDate).get());
		int nbVoyageurs = v.getVoyageurs().size();

		// Vérification que le nb de places dispo est inférieur au nb de voyageurs
		if (nbPlaces < nbVoyageurs) {
			return null;
		}

		// sauvegarde des dates de voyages
		dvRepo.save(v.getDateVoyage());
		// Création du voyage
		voyageRepo.save(v);
		// renvoi du voyage créé
		return v;
	}

	@PostMapping("/voyage/order")
	public Voyage commanderVoyage(@RequestBody Voyage v) {
		// récupération du nombre de places disponibles pour les dates de voyage choisie
		long idDate = v.getDateVoyage().getId();
		double nbPlaces = dvRepo.findById(idDate).get().getNbPlaces();

		int nbVoyageurs = v.getVoyageurs().size();

		// Vérification que le nb de places dispo est inférieur au nb de voyageurs
		if (nbPlaces < nbVoyageurs) {
			return null;
		}

		// màj du nombre de places
		v.getDateVoyage().setNbPlaces(nbPlaces - nbVoyageurs);

		// sauvegarde des dates de voyages
		dvRepo.save(v.getDateVoyage());
		// Création du voyage
		voyageRepo.save(v);
		// renvoi du voyage créé
		return v;
	}

	@PostMapping("/voyage/client/all")
	public List<Voyage> getVoyagesClient(@RequestBody Client c) {
		List<Voyage> v = voyageRepo.findByClient(c);
		return v;
	}

	@GetMapping("/voyage/{id}")
	public Voyage getVoyageById(@PathVariable("id") long id) {
		Voyage v = voyageRepo.findById(id).get();
		return v;
	}
	
	@GetMapping("/client/{nom}")
	public Client getClientByNom(@PathVariable("nom") String nom) {
		Client c = clientRepo.getByNom(nom);
		return c;
	}

	@GetMapping("/promotion")
	public List<DatesVoyages> getPromotion() {
		List<DatesVoyages> dv = dvRepo.getPromotion();
		long id = 0;
		// recupération des noms de destination.
		for (DatesVoyages d : dv) {
			id = d.getFk_destination();
			d.setNmDestination(destRepo.findById(id).get().getRegion());
		}

		return dv;
	}

	@GetMapping("/datesvoyages/{id}")
	public DatesVoyages getdatesVoyages(@PathVariable("id") long id) {
		DatesVoyages dv = dvRepo.getDatesVoyagesById(id);
		long idDest = 0;
		// recupération du nom de la destination.
		idDest = dv.getFk_destination();
		dv.setNmDestination(destRepo.findById(idDest).get().getRegion());

		return dv;
	}

	@PostMapping("/connexion")
	public boolean connexion(@RequestParam("password") String password, Client client, Model model)
			throws NoSuchAlgorithmException {
		String hash = fr.gtm.bovoyages.util.Digest.Sha256(password);

		model.addAttribute("client", client);
		String nom = client.getNom();
		Client bdd = clientRepo.getByNom(nom);
		if (bdd != null) {
			if (clientRepo.getValues(nom).equals(hash)) {
				System.out.println("connexion accepté");
				return true;
			} else {
				System.out.println("connexion refusée");
				return false;
			}

		} else {
			System.out.println("connexion refusée");
			return false;
		}
	}

	@PostMapping("/user/new")
	public boolean createUser(String nom,String password) throws NoSuchAlgorithmException {
		String sha = fr.gtm.bovoyages.util.Digest.Sha256(password);

		try {
			Client c = clientRepo.getByNom(nom);
			c.getNom();
		} catch (NullPointerException e) {
			clientRepo.createUser(nom, password, sha);
			System.out.println("L'utilisateur a été créé");
			return true; 
		}
		System.out.println("Le nom d'utilisateur existe déjà en base");
		return false;

	}
	
	@PostMapping("/mail/send")
	@Async
	public void testMail(@RequestBody MailReceptor r) {
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(r.getEmail());
		mail.setFrom("NePasRepondre@bovoyages.net");
		mail.setSubject("Merci pour votre commande");
		mail.setText("Très cher " + r.getPrenom()
				+ ",\n\nNous vous remercions chaleureusement pour votre commande.\nProfitez bien de votre séjour et à bientôt sur BoVoyages\n\nBovoyages.net");
		mailSender.send(mail);

	}

}
