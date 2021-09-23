import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { OtroComponent } from './otro/otro.component';

export const ComponentesRoutes: Routes = [
    {
        path: '',
        component: InicioComponent
    }, 
    {
        path: 'otro',
        component: OtroComponent
    }

];