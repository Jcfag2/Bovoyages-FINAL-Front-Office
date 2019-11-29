package fr.gtm.bovoyages.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;



@Entity
@Table(name = "destinations")
@NamedQueries({ 
	@NamedQuery(name = "Destination.byRegion", query = "SELECT d FROM Destination d WHERE d.region = :region"),
	@NamedQuery(name = "Destination.getAll", query = "SELECT d FROM Destination d WHERE d.deleted = 0"),
	@NamedQuery(name = "Destination.getDatesVoyagePromotion", query = "SELECT d FROM Destination d JOIN d.datesVoyages dv WHERE dv.promotion = 1")})
public class Destination implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pk_destination")
	private long id;
	private String region;
	@Column(name = "description")
	private String descriptif;
	//Les destinations rayés mais pas supprimées
	private int deleted;

	@ElementCollection(fetch = FetchType.EAGER)
	@CollectionTable(name="images", joinColumns=@JoinColumn(name="fk_destination"))
	@Column(name="image")
	private List<String> images = new ArrayList<>();
	
	@OneToMany(cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	@JoinColumn(name="fk_destination")
	private Set<DatesVoyages> datesVoyages = new HashSet<>();

	public Destination() {}

	public Destination(String region, String descriptif) {
		this.region = region;
		this.descriptif = descriptif;
	}
	
	public Destination(String region, String descriptif, DatesVoyages dv) {
		this.region = region;
		this.descriptif = descriptif;
		this.datesVoyages.add(dv);
	}
	
	public void addDatesVoyages(DatesVoyages dateVoyage) {
		datesVoyages.add(dateVoyage);
	}
	
	public void deleteVoyages(DatesVoyages dateVoyage) {
		Iterator<DatesVoyages> it = datesVoyages.iterator();
		while(it.hasNext()) {
			DatesVoyages dv = it.next();
			if(dv.getId() == dateVoyage.getId()) {
				it.remove();				
			}
		}	
	}
	
	public List<String> getImages() {
		return images;
	}


	public void setImages(List<String> image) {
		this.images = image;
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
	
	
	public Set<DatesVoyages> getDatesVoyages(){
		return datesVoyages;
	}

	public void setDatesVoyages(Set<DatesVoyages> dateVoyage) {
		this.datesVoyages = dateVoyage;
		
	}
	
	@Override
	public String toString() {
		return "Destination [region=" + region + ", descriptif=" + descriptif + "]";
	}

	public int getDeleted() {
		return deleted;
	}

	public void setDeleted(int deleted) {
		this.deleted = deleted;
	}

}
