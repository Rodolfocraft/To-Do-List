package com.example.backendexact.entities;
import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Table(name = "Tareas")
public class Tareas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "titulo",length = 150,nullable = false)
    private String titulo;
    @Column(name = "fechafin", nullable = false)
    private LocalDate fechafin;

    @Column(name = "estado",length = 150,nullable = false)
    private String estado;


    public Tareas() {
    }

    public Tareas(int id, String titulo, LocalDate fechafin, String estado) {
        this.id = id;
        this.titulo = titulo;
        this.fechafin = fechafin;
        this.estado = estado;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public LocalDate getFechafin() {
        return fechafin;
    }

    public void setFechafin(LocalDate fechafin) {
        this.fechafin = fechafin;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
