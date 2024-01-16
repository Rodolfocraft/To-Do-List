import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { CreaeditaTareasComponent } from './components/tareas/creaedita-tareas/creaedita-tareas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tareas',
    pathMatch: 'full',
  },
  {path: 'tareas',
  component:TareasComponent,
  children: [
    {path: 'nuevo', component: CreaeditaTareasComponent},
  ]
  },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
