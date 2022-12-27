import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  BackEndUrl = 'https://localhost:44379/';
  ApiUrl = 'api/alumno/'

  constructor(private http: HttpClient) { }

  public getListaAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.BackEndUrl + this.ApiUrl + 'listar');
  }

   public AgregarAlumno(alumno: Alumno): Observable<any>{
    return this.http.post(this.BackEndUrl + this.ApiUrl + 'agregar', alumno);
  }

  public EditarAlumno(alumno: Alumno): Observable<any>{
    return this.http.post(this.BackEndUrl + this.ApiUrl + 'editar', alumno);
  }

  public EliminarAlumno(alumno:Alumno): Observable<any>{
    console.log("eliminar"+alumno);
    return this.http.post(this.BackEndUrl + this.ApiUrl + 'eliminar',alumno);
  }
}
