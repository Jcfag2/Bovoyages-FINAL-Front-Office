package fr.gtm.bovoyages.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import fr.gtm.bovoyages.entities.Destination;

@Repository
public interface DestinationRepository extends JpaRepository<Destination, Long> {
	Destination findByRegion(String nom);
}
