import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from '../shared/shared.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddEditAlumnoComponent } from '../features/alumno/add-edit-alumno/add-edit-alumno.component';
import { DeleteComponent } from '../features/alumno/delete/delete.component';
import { AlumnoListaComponent } from '../pages/alumno-lista/alumno-lista.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    HomeComponent,
    AlumnoListaComponent,
    AddEditAlumnoComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    RouterOutlet,
  ],
  exports: [
    DashboardLayoutComponent,
    AlumnoListaComponent,
    AddEditAlumnoComponent,
    DeleteComponent
  ]
})
export class LayoutsModule { }
