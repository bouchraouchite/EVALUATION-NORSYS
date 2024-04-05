package fr.norsys.service;

import fr.norsys.entities.Empreinte;
import fr.norsys.repository.EmpreinteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpreinteService {
    @Autowired
    private EmpreinteRepository empreinteRepository;

    public List<Empreinte> getAllEmpreintes() {
        return empreinteRepository.findAll();
    }

    public Optional<Empreinte> getEmpreinteById(Long id) {
        return empreinteRepository.findById(id);
    }

    public Empreinte saveEmpreinte(Empreinte empreinte) {
        return empreinteRepository.save(empreinte);
    }

    public Empreinte updateEmpreinte(Long id, Empreinte empreinte) {
        if (empreinteRepository.existsById(id)) {
            empreinte.setId(id);
            return empreinteRepository.save(empreinte);
        } else {
            throw new IllegalArgumentException("Empreinte not found with id: " + id);
        }
    }

    public void deleteEmpreinteById(Long id) {
        empreinteRepository.deleteById(id);
    }
}