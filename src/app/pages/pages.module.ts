import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoListaComponent } from './alumno-lista/alumno-lista.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AlumnoListaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AlumnoListaComponent,
    HomeComponent,
  ]
})
export class PagesModule { }
