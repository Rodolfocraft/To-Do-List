package com.example.backendexact.serviceimplements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backendexact.entities.Tareas;
import com.example.backendexact.repositories.ITareasRepository;
import com.example.backendexact.serviceinterfaces.ITareasService;
import java.util.List;

@Service
public class TareasServiceImplement implements ITareasService{
    @Autowired
    private ITareasRepository tR;
    @Override
    public void insert(Tareas tareas) {tR.save(tareas);}
    @Override
    public List<Tareas> list(){return tR.findAll();}

    @Override
    public void delete(int idTareas) {tR.deleteById(idTareas);}

    @Override
    public Tareas listId(int idTareas) {
        return tR.findById(idTareas).orElse(new Tareas());
    }

    @Override
    public void update(Tareas tareas) { // Método update implementado
        tR.save(tareas);
    }

}
