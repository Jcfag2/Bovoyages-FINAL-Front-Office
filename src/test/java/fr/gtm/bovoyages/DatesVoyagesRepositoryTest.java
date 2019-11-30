package fr.gtm.bovoyages;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import fr.gtm.bovoyages.dao.DatesVoyagesRepository;
import fr.gtm.bovoyages.entities.DatesVoyages;

@SpringBootTest
@ExtendWith(SpringExtension.class)
class DatesVoyagesRepositoryTest {
@Autowired DatesVoyagesRepository dvRepo;
	
	@Test
	void getAllVoyagesOrdered(){
	//recupération des DatesVoyages triées par fk_destination et prix
	List<DatesVoyages> dv = dvRepo.getAllVoyagesOrdered();
	
	//Vérification que la liste reçu est non nulle
	assertNotNull(dv);
		
		long fk = 0;
		boolean b;
		
	//Vérification du trie sur la fk	
	for(DatesVoyages d : dv) {
		b = (d.getFk_destination()>=fk);
		assertTrue(b);
		fk = d.getFk_destination();
	}
	
		fk = 0;
		double prix = 0;
	//Vérification du trie sur le prix	
	for(DatesVoyages d : dv) {
		if(d.getFk_destination()!=fk) {
			prix = 0;
		}
		b = (d.getTarifUnitaireHT()>=prix);
		assertTrue(b);
		prix = d.getTarifUnitaireHT();
		fk = d.getFk_destination();
	}
	
	}
	
	@Test
	void getPromotion() {
	//récupération des datesVoyages en promotion
	List<DatesVoyages> dv = dvRepo.getPromotion();
	
	//Vérification que la liste reçu est non nulle
	assertNotNull(dv);
	
	//Vérification que chaque date reçu est bien en promotion
	for(DatesVoyages d : dv) {
		assertEquals(1, d.getPromotion());
	}
	
	}
	
	@Test
	void getDatesVoyagesById() {
	//Récupération de la datesVoyages qui possède l'id 1
	DatesVoyages dv = dvRepo.getDatesVoyagesById(1);	
	
	//Vérification que la datesVoyages reçu n'est pas nulle
	assertNotNull(dv);
	
	//Verification que la datesVoyages reçu a bien l'ID 1
	assertEquals(1,dv.getId());
	}

	

}
