import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../configuracion/constantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  hide = true;
  errorIngreso: boolean = false;

  constructor(private http: HttpClient,
              private route: Router) { }

  ngOnInit(): void {
  }

  ingresar(formulario: NgForm) {

    const datos = {
      e_mail: formulario.value.correo,
      contrasenia: formulario.value.clave
    };
    this.http.post(Constantes.URL + Constantes.INGRESO, datos).
    subscribe((respuesta: any) => {
      localStorage.setItem('sesion', 'askhjdbasjhdb23423423jasd*:..sadjas');
      this.route.navigate(['/administrador']);
    }, (error: any) => {
      console.log(error);
      this.errorIngreso = true;
    });
  }

}
