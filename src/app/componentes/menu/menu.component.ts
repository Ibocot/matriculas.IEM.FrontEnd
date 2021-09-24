import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isAdmin: boolean = false;

  constructor(private route: Router) {
    this.isAdmin = localStorage.getItem('sesion') ? true: false;
  }

  ngOnInit(): void {
  }

  cerrarSesion() {
    localStorage.clear();
    this.isAdmin = false;
    this.route.navigate(['/ingreso']);
  }

}
