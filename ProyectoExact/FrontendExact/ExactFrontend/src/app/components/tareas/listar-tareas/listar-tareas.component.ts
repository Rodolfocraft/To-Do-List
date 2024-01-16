import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Tareas } from 'src/app/models/tareas';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent implements OnInit {
  datasource: MatTableDataSource<Tareas> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'codigo',
    'titulo',
    'fechafin',
    'accion01',
    'accion02',
   ];
   selectedRows: Tareas[] = [];
   constructor(private tS: TareasService) {}
  ngOnInit(): void {
  
    this.tS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
    });
    this.tS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.tS.delete(id).subscribe((data) => {
      this.tS.list().subscribe((data) => {
        this.tS.setList(data);
      });
    });
  }

  toggleSelection(row: Tareas) {
    // Cambiar el estado de la tarea
    row.estado = row.seleccionado ? 'finalizado' : 'en proceso';

    // Actualizar la tarea en el servidor
    this.tS.update(row).subscribe(() => {
      console.log('Tarea actualizada');
      // Refrescar los datos de la tabla luego del cambio
      this.refreshData();
    });
  }

  refreshData() {
    this.tS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
    });
  }
  
}
