package fr.gtm.bovoyages;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import fr.gtm.bovoyages.dao.ClientRepository;
import fr.gtm.bovoyages.entities.Client;

@SpringBootTest
@ExtendWith(SpringExtension.class)
class ClientRepositoryTest {
@Autowired ClientRepository clientRepo;
	
	@Test
	void getByNom() {
		String nom = "Costes";
		Client c1 = new Client("Costes",1);
		Client c2 = clientRepo.getByNom(nom);
		
		assertEquals(c1, c2);

	}
	
	@Test
	void getValues() {
		String nom = "Costes";
		String expectedSha = "29d17bb5acaf9221073ab9c892c1ddb80afbc18f0de6ed768b0fee4feab093a8";
		String sha = clientRepo.getValues(nom);
		
		assertEquals(expectedSha, sha);

	}
	
	@Test
	void createUser() {
		 String nom = "Timmy";
		 String pw = "timmypw";
		 String sha = "08ded9a4de39debe6f331fc05967be6ba1866e77f33527254bfff83c300e2380";
		 
		 clientRepo.createUser(nom, pw, sha);
		 Client c1 = clientRepo.getByNom("Timmy");
		 String sha2 = clientRepo.getValues(nom);
		 
		 assertEquals(nom, c1.getNom());
		 assertEquals(sha, sha2);
		 clientRepo.delete(c1);
		 
	}
	

}
