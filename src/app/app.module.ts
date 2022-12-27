import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlumnoComponent } from './components/contenido/alumno/alumno.component';
import { AddEditAlumnoComponent } from './components/modals/add-edit-alumno/add-edit-alumno.component';
import { DeleteComponent } from './components/modals/delete/delete.component';

// Angular Material
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es')

// Service
import { HttpClientModule } from '@angular/common/http';

// Angular Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pipes
import { NombreCompletoPipe } from './components/pipes/nombre-completo.pipe';

// Directivas
import { TitulosDirective } from './components/directivas/titulos.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    AlumnoComponent,
    AddEditAlumnoComponent,
    DeleteComponent,
    NombreCompletoPipe,
    TitulosDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatSnackBarModule
  ],
  providers: [{provide: NgModule, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
