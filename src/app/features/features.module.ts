import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditAlumnoComponent } from './alumno/add-edit-alumno/add-edit-alumno.component';
import { DeleteComponent } from './alumno/delete/delete.component';

@NgModule({
  declarations: [
    AddEditAlumnoComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    AddEditAlumnoComponent,
    DeleteComponent
  ]
})
export class FeaturesModule { }
