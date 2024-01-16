package com.example.backendexact.repositories;
import com.example.backendexact.entities.Tareas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITareasRepository extends JpaRepository<Tareas, Integer> {

}
