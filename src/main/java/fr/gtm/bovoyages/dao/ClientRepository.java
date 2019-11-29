package fr.gtm.bovoyages.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.gtm.bovoyages.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
