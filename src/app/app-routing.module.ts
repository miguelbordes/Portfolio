import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './contacto/contacto.component';
import { IlustracionesComponent } from './ilustraciones/ilustraciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'ilustraciones', component: IlustracionesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
