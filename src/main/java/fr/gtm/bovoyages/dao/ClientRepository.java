package fr.gtm.bovoyages.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fr.gtm.bovoyages.entities.Client;


@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
	@Query("SELECT c FROM Client c WHERE c.nom = ?1")
	Client getByNom(String nom);
	
	@Query(value = "SELECT sha from clients WHERE nom = ?1", nativeQuery = true)
	String getValues(String nom);
	
	@Modifying
	@Query(value = "INSERT INTO users (pk_client, nom, password, sha) VALUES (0, ?1, ?2, ?3)", nativeQuery = true)
	@Transactional
	void createUser( String nom, String pw, String sha);
}
