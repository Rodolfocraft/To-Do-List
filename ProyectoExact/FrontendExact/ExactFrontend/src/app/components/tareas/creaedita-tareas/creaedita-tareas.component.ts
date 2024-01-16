import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Tareas } from 'src/app/models/tareas';
import { TareasService } from 'src/app/services/tareas.service';


@Component({
  selector: 'app-creaedita-tareas',
  templateUrl: './creaedita-tareas.component.html',
  styleUrls: ['./creaedita-tareas.component.css']
})
export class CreaeditaTareasComponent implements OnInit {
form: FormGroup = new FormGroup({});
tareas: Tareas = new Tareas();
mensaje: string = '';
id:number = 0;
edicion: boolean = true;
maxFecha: Date = moment().add(730, 'days').toDate();
constructor(
  private tS: TareasService,
  private router: Router,
  private formBuilder: FormBuilder,
  private route: ActivatedRoute
) {}


ngOnInit(): void {
  this.route.params.subscribe((data: Params) => {
    this.id = data['id'];
    this.edicion = data['id'] != null;
    this.init();
  });

  this.form = this.formBuilder.group({
    id: [''],
    titulo: ['', Validators.required],
    fechafin: ['', Validators.required],
  });
}
aceptar(): void {
  if (this.form.valid) {
    this.tareas.id = this.form.value.id;
    this.tareas.titulo = this.form.value.titulo;
    this.tareas.fechafin = this.form.value.fechafin;
    
     
      
      this.tS.insert(this.tareas).subscribe((data) => {
        this.tS.list().subscribe((data) => {
          this.tS.setList(data);
        });
      });
    
    this.router.navigate(['/tareas']);
  } else {
    this.mensaje = 'Por favor complete todos los campos obligatorios.';
  }
}

obtenerControlCampo(nombreCampo: string): AbstractControl {
  const control = this.form.get(nombreCampo);
  if (!control) {
    throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
  }
  return control;
}
init() {
  if (this.edicion) {
    this.tS.listId(this.id).subscribe((data) => {
      this.form = new FormGroup({
        id: new FormControl(data.id),
        titulo: new FormControl(data.titulo),
        fechafin: new FormControl(data.fechafin),
      });
    });
  }
}


}



