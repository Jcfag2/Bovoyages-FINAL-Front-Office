package fr.gtm.bovoyages.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fr.gtm.bovoyages.entities.DatesVoyages;

@Repository
public interface DatesVoyagesRepository extends JpaRepository<DatesVoyages, Long> {
@Query(value = "select * from bovoyages.dates_voyages where deleted = 0 order by fk_destination asc, `prixHT` asc", nativeQuery = true)
List<DatesVoyages> getAllVoyagesOrdered();
}
