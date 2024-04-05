package fr.norsys.entities;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Empreinte {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private boolean isReturned;
}
