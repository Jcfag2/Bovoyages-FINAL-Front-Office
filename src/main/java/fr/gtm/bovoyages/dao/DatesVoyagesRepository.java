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

@Query("select dv from DatesVoyages dv where promotion = 1 and deleted = 0 order by dv.tarifUnitaireHT asc")
List<DatesVoyages> getPromotion();

DatesVoyages getDatesVoyagesById(long id);
}
