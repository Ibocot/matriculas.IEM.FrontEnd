import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constantes } from '../configuracion/constantes';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  hide = true;
  hide1 = true;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  registrarEstudiante(formulario: NgForm) {
    const datos = {
      primer_nombre: formulario.value.primer_nombre,
      segundo_nombre: formulario.value.segundo_nombre,
      primer_apellido: formulario.value.primer_apellido,
      segundo_apellido: formulario.value.segundo_apellido,
      documento_identidad: formulario.value.documento_identidad,
      numero_documento: formulario.value.numero_documento,
      contrasenia: formulario.value.clave,
      e_mail: formulario.value.correo_electronico
    };
    this.http.post(Constantes.URL + Constantes.ESTUDIANTES, datos)
    .subscribe((respuesta: any) => {
      console.log(respuesta);

    }, (error: any) => {
      console.log(error);
    });
  }

}
