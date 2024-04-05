package fr.norsys.controller;

import fr.norsys.entities.Empreinte;
import fr.norsys.service.EmpreinteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/empreintes")
public class EmpreinteController {
    @Autowired
    private EmpreinteService empreinteService;

    @GetMapping
    public List<Empreinte> getAllEmpreintes() {
        return empreinteService.getAllEmpreintes();
    }

    @GetMapping("/{id}")
    public Empreinte getEmpreinteById(@PathVariable Long id) {
        return empreinteService.getEmpreinteById(id)
                .orElseThrow(() -> new IllegalArgumentException("Empreinte not found with id: " + id));
    }

    @PostMapping
    public Empreinte addEmpreinte(@RequestBody Empreinte empreinte) {
        return empreinteService.saveEmpreinte(empreinte);
    }

    @PutMapping("/{id}")
    public Empreinte updateEmpreinte(@PathVariable Long id, @RequestBody Empreinte empreinte) {
        return empreinteService.updateEmpreinte(id, empreinte);
    }

    @DeleteMapping("/{id}")
    public void deleteEmpreinteById(@PathVariable Long id) {
        empreinteService.deleteEmpreinteById(id);
    }
}