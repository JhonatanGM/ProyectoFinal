import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitulosDirective } from './directivas/titulos.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TitulosDirective,
    NavbarComponent,
    ToolbarComponent,
    NombreCompletoPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TitulosDirective,
    NavbarComponent,
    ToolbarComponent,
    NombreCompletoPipe
  ]
})
export class SharedModule { }
