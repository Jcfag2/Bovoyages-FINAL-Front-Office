package fr.gtm.bovoyages.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import fr.gtm.bovoyages.dao.ClientRepository;
import fr.gtm.bovoyages.dao.DatesVoyagesRepository;
import fr.gtm.bovoyages.dao.DestinationRepository;
import fr.gtm.bovoyages.dao.VoyagesRepository;
import fr.gtm.bovoyages.entities.DatesVoyages;
import fr.gtm.bovoyages.entities.Destination;

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

	@GetMapping("/destinations/uniques")
	public List<DatesVoyages> getAllDestinationsMoinsCher() {
		List<DatesVoyages> avecDoublons = dvRepo.getAllVoyagesOrdered();
		List<DatesVoyages> sansDoublons = new ArrayList<DatesVoyages>();
		long fk = 0;
		long id = 0;

		for (DatesVoyages a : avecDoublons) {
			if (a.getFk_destination() != fk) {
				sansDoublons.add(a);
				fk = a.getFk_destination();
			}
		}

		for (DatesVoyages sd : sansDoublons) {
			id = sd.getFk_destination();
			sd.setNmDestination(destRepo.findById(id).get().getRegion());
		}

		return sansDoublons;

	}

	@GetMapping("/destinations/{id}")
	public Destination getDestinationById(@PathVariable("id") long id) {
		Destination destination = destRepo.findById(id).get();
		return destination;
	}
	

	
}
