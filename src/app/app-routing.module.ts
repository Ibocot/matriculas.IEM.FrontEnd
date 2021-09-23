import { Routes } from '@angular/router';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { RegistroComponent } from './componentes/registro/registro.component';

export const Approutes: Routes = [
    {
        path: 'ingreso',
        component: IngresoComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    }
    
];