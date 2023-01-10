import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

import { AddEditAlumnoComponent } from 'src/app/features/alumno/add-edit-alumno/add-edit-alumno.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteComponent } from '../../features/alumno/delete/delete.component';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {


  displayedColumns: string[] = ['id', 'nombreCompleto', 'nombres', 'aPaterno','aMaterno','fechaNacimiento','dni','correo',' '];
  dataSource = new MatTableDataSource<Alumno>();
  mensajePublico?: string;
  mensajeprivado?: string;

  constructor(private _service: AlumnoService,
              public _dialog: MatDialog,
              private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.listarAlumnos();
  }
  mostrarAlerta(msg:string,accion:string) {
    this._snackBar.open(msg,accion,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    });
  }

  listarAlumnos(){
    this._service.getListaAlumnos().subscribe({
      next:(response:any)=>{
          this.dataSource.data = response.results;
      },error:(e)=>{
        this.mensajePublico = e;
      }

    });
  }

  nuevoAlumno() {
    this._dialog.open(AddEditAlumnoComponent,{
      disableClose:true
      }).afterClosed().subscribe(resultado =>{
      if(resultado=== "ok"){
        this.listarAlumnos();
      }
      });
  }

  editarAlumno(dataAlumno:Alumno) {
    this._dialog.open(AddEditAlumnoComponent,{
      disableClose:true,
      data:dataAlumno
    }).afterClosed().subscribe(resultado =>{
    if(resultado=== "ok"){
      this.listarAlumnos();
    }
    });
  }

  eliminarAlumno(dataAlumno:Alumno){
    this._dialog.open(DeleteComponent,{
      disableClose:true,
      data:dataAlumno
    }).afterClosed().subscribe(resultado =>{
    if(resultado=== "ok"){
      this._service.EliminarAlumno(dataAlumno).subscribe({
        next:(data)=> {
          this.mostrarAlerta(data.messagePublico,data.messagePrivado);
          this.listarAlumnos();
        },error:(err)=> {
          this.mostrarAlerta(err.messagePublico,err.messagePrivado);
        },
      })

    }
    });
  }
}
