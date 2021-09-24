import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  export class AdministradorGuard implements CanActivate {

    constructor(private route: Router) {}

    canActivate() {
      const token = localStorage.getItem('sesion');
      if (token) {
        return true;
      } else {
        this.route.navigate(['/principal/home']);
        localStorage.clear();
        return false;
      }
    }

  }