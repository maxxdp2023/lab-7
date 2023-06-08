package backend.lab7.repositories;

import backend.lab7.entities.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "cars", path = "cars")
public interface CarRepository extends JpaRepository<CarEntity, Long> {
}
