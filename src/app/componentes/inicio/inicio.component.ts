import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../configuracion/constantes';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  informacionEstudiante = {
    primer_nombre: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    documento_identidad: '',
    numero_documento: '',
    fecha_insercion: '',
    contrasenia: '',
    e_mail: '',
    id: ''
  };

  informacionCurso: any[] = [];
  informacionMatricula: any[] = [];

  constructor(private http: HttpClient,
              private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('sesion-usuario')) {
      this.http.get(Constantes.URL + Constantes.ESTUDIANTES + localStorage.getItem('sesion-usuario'))
      .subscribe((respuesta: any) => {
        this.informacionEstudiante = respuesta;
      }, (error: any) => {
        console.log(error);
      });
      this.cargarInformacionCursos();
      this.cargarInformacionMatricula();
    } else {
      this.cerrarSesion();
    }
  }

  cargarInformacionCursos() {
    this.http.get(Constantes.URL + Constantes.CURSO).
    subscribe((respuesta: any) => {
      console.log(respuesta);
      this.informacionCurso = respuesta;
    }, (error: any) => {
      console.log(error);
    });
  }
  
  cargarInformacionMatricula() {
    this.http.get(Constantes.URL + Constantes.ESTUDIANTES + localStorage.getItem('sesion-usuario') + '/matriculas').
    subscribe((respuesta: any) => {
      console.log(respuesta);
      this.informacionMatricula = respuesta;
    }, (error: any) => {
      console.log(error);
    });
  }

  cerrarSesion() {
    localStorage.clear();
    this.route.navigate(['/ingreso']);
  }

  matricular(idCurso: any) {
    const datos = {
      estudiante_id: localStorage.getItem('sesion-usuario'),
      curso_id: idCurso
    };
    this.http.post(Constantes.URL + Constantes.MATRICULAS, datos).
    subscribe((respuesta: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Curso inscrito',
        confirmButtonColor: '#3f51b5',
        confirmButtonText: 'Aceptar'
      });
      this.cargarInformacionMatricula();
    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Curso no inscrito',
        confirmButtonColor: '#ff0000',
        confirmButtonText: 'Aceptar'
      });
    });
  }

}
