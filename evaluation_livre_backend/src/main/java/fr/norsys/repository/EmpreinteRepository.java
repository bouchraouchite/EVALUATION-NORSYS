package fr.norsys.repository;


import fr.norsys.entities.Empreinte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpreinteRepository extends JpaRepository<Empreinte, Long> {

}