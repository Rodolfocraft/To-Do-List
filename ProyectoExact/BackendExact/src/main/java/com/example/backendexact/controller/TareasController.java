package com.example.backendexact.controller;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.backendexact.dtos.TareasDTO;
import com.example.backendexact.entities.Tareas;
import com.example.backendexact.serviceinterfaces.ITareasService;
import java.util.List;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/tareas")
public class TareasController {
    @Autowired
    private ITareasService tS;

    @PostMapping
    public void registrar(@RequestBody TareasDTO dto) {
        ModelMapper m = new ModelMapper();
        Tareas t = m.map(dto, Tareas.class);
        tS.insert(t);
    }
    @GetMapping
    public List<TareasDTO>listar(){
        return tS.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,TareasDTO.class);
        }).collect(Collectors.toList());
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id")Integer id){tS.delete(id);}

    @GetMapping("/{id}")
    public TareasDTO listId(@PathVariable("id") Integer id){
        ModelMapper m = new ModelMapper();
        TareasDTO dto = m.map(tS.listId(id), TareasDTO.class);
        return dto;
    }

    @PutMapping("/{id}")
    public void modificar(@PathVariable("id") Integer id, @RequestBody TareasDTO dto){
        ModelMapper m = new ModelMapper();
        Tareas t = m.map(dto,Tareas.class);
        t.setId(id); // Asegúrate de que la tarea tiene el ID correcto
        tS.update(t);
    }


}
