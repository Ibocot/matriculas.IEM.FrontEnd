import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  export class AdministradorGuard implements CanActivate {

    constructor(private route: Router) {}

    canActivate() {
      const token = true;
      // validar si hay token
      if (token) {
        
      } else {
        this.route.navigate(['ingreso']);
        return false;
      }
      return true;
    }

  }