package backend.lab7;

import backend.lab7.entities.CarEntity;
import backend.lab7.repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Lab7Application implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(Lab7Application.class, args);
	}

	@Autowired
	private CarRepository cRepo;

	@Override
	public void run(String... args) throws Exception {
		CarEntity car = new CarEntity();
		car.setName("TERRIER LT-79");
		car.setImg("assets/Terrier-LT-79.jpg");
		car.setPrice(1000);
		cRepo.save(car);

		CarEntity car1 = new CarEntity();
		car1.setName("HUSKY TSV");
		car1.setImg("assets/HUSKY-TSV.jpg");
		car1.setPrice(1200);
		cRepo.save(car1);

		CarEntity car2 = new CarEntity();
		car2.setName("BATT UMG");
		car2.setImg("assets/BATT-UMG.jfif");
		car2.setPrice(900);
		cRepo.save(car2);
	}
}
