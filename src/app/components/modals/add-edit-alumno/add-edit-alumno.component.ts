import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DATE_FORMATS,MAT_DATE_LOCALE,DateAdapter } from '@angular/material/core';
import * as moment from 'moment';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_DATE_FORMATS = {
  parse:{
    dateInput:'DD/MM/YYYY'
  },
  display:{
    dateInput:'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel:'MMMM YYYY'
  }
}

@Component({
  selector: 'app-add-edit-alumno',
  templateUrl: './add-edit-alumno.component.html',
  styleUrls: ['./add-edit-alumno.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
  ]
})
export class AddEditAlumnoComponent implements OnInit {

  formAlumno: FormGroup;
  tituloAccion: string = "Nuevo";
  botonAccion: string = "Registrar";
  listaALumnos: Alumno[]=[];

  constructor(private _modals: MatDialogRef<AddEditAlumnoComponent>,
              private _fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private _alumnoService: AlumnoService,
              @Inject(MAT_DIALOG_DATA) public dataAlumno: Alumno
              ) {

                this.formAlumno = this._fb.group({
                  nombres:['',Validators.required],
                  aPaterno:['',Validators.required],
                  aMaterno:['',Validators.required],
                  fechaNacimiento:['',Validators.required],
                  dni:['',Validators.required],
                  correo:['',Validators.required]
                })
    this._alumnoService.getListaAlumnos().subscribe({
      next:(data:any) => {
        this.listaALumnos = data.results;
      },error:(e)=>{

      }
    })
  }

  mostrarAlerta(msg:string,accion:string) {
    this._snackBar.open(msg,accion,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    });
  }

  addEditAlumno(){
    const modelo: Alumno ={
      id:0,
      nombreCompleto: this.formAlumno.value.nombres + ' ' + this.formAlumno.value.aPaterno + ' ' + this.formAlumno.value.aMaterno,
      nombres: this.formAlumno.value.nombres,
      aPaterno: this.formAlumno.value.aPaterno,
      aMaterno: this.formAlumno.value.aMaterno,
      fechaNacimiento: moment(this.formAlumno.value.fechaNacimiento).format("DD/MM/YYYY"),
      dni: parseInt(this.formAlumno.value.dni),
      correo: this.formAlumno.value.correo
    }
    if(this.dataAlumno == null){
      this._alumnoService.AgregarAlumno(modelo).subscribe({
        next:(data)=> {
          this.mostrarAlerta(data.messagePublico,data.messagePrivado);
          this._modals.close("ok");
          this.formAlumno.reset();
        },error:(err)=> {
          this.mostrarAlerta(err.messagePublico,err.messagePrivado);
        },
      })

    }else{
      modelo.id = this.dataAlumno.id;
      this._alumnoService.EditarAlumno(modelo).subscribe({
        next:(data)=> {
          this.mostrarAlerta(data.messagePublico,data.messagePrivado);
          this._modals.close("ok");
          this.formAlumno.reset();
        },error:(err)=> {
          this.mostrarAlerta(err.messagePublico,err.messagePrivado);
        },
      })

    }
  }

  ngOnInit(): void {
  if(this.dataAlumno){
    this.formAlumno.patchValue({
      id: this.dataAlumno.id,
      nombres: this.dataAlumno.nombres,
      aPaterno: this.dataAlumno.aPaterno,
      aMaterno: this.dataAlumno.aMaterno,
      fechaNacimiento: new Date(moment(this.dataAlumno.fechaNacimiento).format('DD/MM/YYYY')),
      dni: this.dataAlumno.dni,
      correo: this.dataAlumno.correo
    })
    this.tituloAccion = "Editar";
    this.botonAccion = "Actualizar";
  }else{
    this.tituloAccion = "Nuevo";
    this.botonAccion = "Registrar";
  }

  }

}
