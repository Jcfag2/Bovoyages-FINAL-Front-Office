package fr.gtm.bovoyages.entities;


import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author Voyageur est un objet métier qui permet de décrire les entités 
 * manipulées par les acteurs dans le cadre de la description du métier.
 *
 */
@Entity
@Table(name = "voyageurs")
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Voyageur implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pk_voyageur")
	@XmlElement
	private long id;
	@XmlElement
	private String civilite;
	@XmlElement
	private String prenom;
	@XmlElement
	private String nom;
	@Column(name = "date_naissance")
	@XmlElement
	private Date dateNaissance;
	
//	List<Voyage> voyages = new ArrayList<Voyage>();
	public Voyageur() {}
	public Voyageur(String civilite, String nom, String prenom, Date dateNaissance, long id) {
		super();
		this.civilite = civilite;
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.id = id;
	}

	public String getCivilite() {
		return civilite;
	}

	public void setCivilite(String civilite) {
		this.civilite = civilite;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Voyageur [civilite=" + civilite + ", prenom=" + prenom + ", nom=" + nom + ", dateNaissance="
				+ dateNaissance + "]";
	}

}
