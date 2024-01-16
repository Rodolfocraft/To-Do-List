package com.example.backendexact.serviceinterfaces;
import com.example.backendexact.entities.Tareas;
import java.util.List;
public interface ITareasService {
    public void insert(Tareas tareas);
    public List<Tareas> list();
    public void delete(int idTareas);

    public Tareas listId(int idTareas);
    public void update(Tareas tareas);
}
