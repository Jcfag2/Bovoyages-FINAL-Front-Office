package fr.gtm.bovoyages.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author Voyage est un objet métier qui permet de décrire les entités 
 * manipulées par les acteurs dans le cadre de la description du métier.
 *
 */
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
@Entity
@Table(name = "voyages")
@Access(AccessType.FIELD)
@NamedQueries({ 
	@NamedQuery(name = "Voyage.getById", query = "SELECT v FROM Voyage v WHERE v.id = :id"),
	@NamedQuery(name = "Voyage.getAllVoyage", query = "SELECT v FROM Voyage v"), 
	@NamedQuery(name = "Voyage.getAllVoyageurs", query = "SELECT v FROM Voyage v WHERE v.id = :id")
})
public class Voyage implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pk_voyage")
	@XmlElement
	private long id;
	@XmlElement
	private String region;
	@XmlElement
	private String descriptif;
	@XmlElement
	@JoinColumn(name = "fk_client")
	@ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
	private Client client;
	@XmlElement
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.EAGER, orphanRemoval = true)
	@JoinTable(name="voyages_voyageurs", joinColumns=@JoinColumn(name="fk_voyage"), inverseJoinColumns = @JoinColumn(name = "fk_voyageur"))
	private List<Voyageur> voyageurs = new ArrayList<>();
	@XmlElement
	@JoinColumn(name="fk_dates_voyage")
	@OneToOne
	private DatesVoyages dateVoyage;
	private static final Logger LOG = Logger.getLogger("bovoyages");

	public Voyage() {}
	public Voyage(String region, String descriptif, long id, DatesVoyages dateVoyage, Client client, List<Voyageur> voyageurs) {
		super();
		this.region = region;
		this.descriptif = descriptif;
		this.id = id;
		this.dateVoyage = dateVoyage;
		this.client = client;
		this.voyageurs = voyageurs;
	}

	public DatesVoyages getDateVoyage() {
		return dateVoyage;
	}

	public void setDateVoyage(DatesVoyages dateVoyage) {
		this.dateVoyage = dateVoyage;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getDescriptif() {
		return descriptif;
	}

	public void setDescriptif(String descriptif) {
		this.descriptif = descriptif;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public List<Voyageur> getVoyageurs() {
		return voyageurs;
	}

	public void setVoyageurs(List<Voyageur> voyageurs) {
		this.voyageurs = voyageurs;
	}

	/**
	 * 
	 * @return La methode getPrixTotalHT retourne le prix total HT pour la totalite des voyageurs
	 */
	public double getPrixTotalHT() {

		double prixTotalHT = 0;
		double prixUnitaireHT = dateVoyage.getTarifUnitaireHT();
		for (Voyageur v : voyageurs) {
			prixTotalHT = voyageurs.size()*prixUnitaireHT;
		}
		return prixTotalHT;
	}
	
	/**
	 * 
	 * @param Prend en parametre le voyageur
	 * @return la liste des voyageurs
	 */
	public List<Voyageur> addParticipants(Voyageur v) {
		List<Voyageur> voyageurs = Arrays.asList(new Voyageur[9]);

		if(voyageurs.size()<1) {
			LOG.info("Ce voyage n'a pas de voyageurs");
		} else if(voyageurs.size()>9) {
			LOG.info("Ce voyage a atteint le maximum de participants");
		}
		return voyageurs;
	}
}
