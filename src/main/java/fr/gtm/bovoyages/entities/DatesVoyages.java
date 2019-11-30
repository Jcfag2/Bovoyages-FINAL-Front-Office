package fr.gtm.bovoyages.entities;


import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityManagerFactory;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;


@Entity
@Table(name="dates_voyages")
@NamedQueries({
	@NamedQuery(name = "DatesVoyage.deleteDatesVoyagesById", query = "DELETE FROM Destination d WHERE d.id = :id"),
	@NamedQuery(name = "DatesVoyage.getDatePromotion", query = "SELECT d FROM DatesVoyages d JOIN Destination dest WHERE d.promotion = 1 AND dest.id = :id")})
public class DatesVoyages implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="pk_date_voyage")
	private long id;
	@Column(name = "date_depart")
	private Date dateAller;
	@Column(name = "date_retour")
	private Date dateRetour;
	@Column(name = "prixHT")
	private double tarifUnitaireHT;
	@Column(name = "nb_places")
	private double nbPlaces;
	
	private int promotion;
	//Les destinations rayés en fonction des dates de voyage
	
	private int deleted;
	
	private long fk_destination;
	
	@Transient
	private String nmDestination;
	
	@Transient
	private String imageURL;
	
	
	public DatesVoyages() {}

	public DatesVoyages(long id, Date dateAller, Date dateRetour, double tarifUnitaireHT, double nbPlaces,
			int promotion, int deleted) {
		super();
		this.id = id;
		this.dateAller = dateAller;
		this.dateRetour = dateRetour;
		this.tarifUnitaireHT = tarifUnitaireHT;
		this.nbPlaces = nbPlaces;
		this.promotion = promotion;
		this.deleted = deleted;
	}

	@Override
	public String toString() {
		return "DatesVoyages [dateAller=" + dateAller + ", dateRetour=" + dateRetour + ", tarifUnitaireHT="
				+ tarifUnitaireHT + ", nbPlaces=" + nbPlaces + "]";
	}
	
	public Date getDateAller() {
		return dateAller;
	}

	public void setDateAller(Date dateAller) {
		this.dateAller = dateAller;
	}

	public Date getDateRetour() {
		return dateRetour;
	}

	public void setDateRetour(Date dateRetour) {
		this.dateRetour = dateRetour;
	}

	public double getTarifUnitaireHT() {
		return tarifUnitaireHT;
	}

	public void setTarifUnitaireHT(double tarifUnitaireHT) {
		this.tarifUnitaireHT = tarifUnitaireHT;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	public double getNbPlaces() {
		return nbPlaces;
	}
	public void setNbPlaces(double nbPlaces) {
		this.nbPlaces = nbPlaces;
	}

	public int getPromotion() {
		return promotion;
	}

	public void setPromotion(int promotion) {
		this.promotion = promotion;
	}

	public int getDeleted() {
		return deleted;
	}

	public void setDeleted(int deleted) {
		this.deleted = deleted;
	}

	public long getFk_destination() {
		return fk_destination;
	}

	public void setFk_destination(long fk_destination) {
		this.fk_destination = fk_destination;
	}

	public String getNmDestination() {
		return nmDestination;
	}

	public void setNmDestination(String nmDestination) {
		this.nmDestination = nmDestination;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}
	
	
}
