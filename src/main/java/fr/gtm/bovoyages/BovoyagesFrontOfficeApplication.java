package fr.gtm.bovoyages;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import fr.gtm.bovoyages.rest.BovoyagesRestController;

@SpringBootApplication
public class BovoyagesFrontOfficeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BovoyagesFrontOfficeApplication.class, args);
	}

}
