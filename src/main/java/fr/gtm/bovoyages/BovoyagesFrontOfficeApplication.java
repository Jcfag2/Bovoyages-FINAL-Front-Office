package fr.gtm.bovoyages;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@SpringBootApplication
@EnableAsync
@EnableSwagger2
@Controller
public class BovoyagesFrontOfficeApplication implements ErrorController{

	private static final String PATH = "/error";
	
	public static void main(String[] args) {
		SpringApplication.run(BovoyagesFrontOfficeApplication.class, args);
	}
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
					.select()
					.apis(RequestHandlerSelectors.basePackage("fr.gtm.bovoyages.rest"))
					.build()
					.apiInfo(apiInfo());
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("REST API de bovoyages")
				.contact(new Contact("Contact", "http://bovoyages.net", "contact@bovoyages.net"))
				.version("0.alpha")
				.build();
	}
	
	@RequestMapping(value=PATH)
	public String error() { return "forward:/index.html"; }
	
	@Override
	public String getErrorPath() {
		return PATH;
		
	}
}
