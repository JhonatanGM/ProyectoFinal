import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  private _snackBar: any;

  constructor(private _modals: MatDialogRef<DeleteComponent>,
              private _alumnoService: AlumnoService,
              @Inject(MAT_DIALOG_DATA) public dataAlumno: Alumno) { }

  ngOnInit(): void {


  }

  mostrarAlerta(msg:string,accion:string) {
    this._snackBar.open(msg,accion,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    });
  }

  confirmar_Eliminar(){
    if(this.dataAlumno){
    this._modals.close("ok")
    }
  }


}
