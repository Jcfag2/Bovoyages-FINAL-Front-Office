package fr.gtm.bovoyages;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import fr.gtm.bovoyages.dao.VoyagesRepository;
import fr.gtm.bovoyages.entities.Client;
import fr.gtm.bovoyages.entities.Voyage;

@SpringBootTest
@ExtendWith(SpringExtension.class)
class VoyagesRepositoryTest {
@Autowired VoyagesRepository voyageRepo;
	
	@Test
	void findByClient() {
		Client c = new Client("Fagothey",3);
		List<Voyage> v = voyageRepo.findByClient(c);
		
		assertNotNull(v);
	}
		

}
