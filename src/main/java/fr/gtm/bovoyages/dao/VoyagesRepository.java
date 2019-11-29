package fr.gtm.bovoyages.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.gtm.bovoyages.entities.Client;
import fr.gtm.bovoyages.entities.Voyage;

@Repository
public interface VoyagesRepository extends JpaRepository<Voyage, Long> {
List<Voyage> findByClient(Client c);
}
