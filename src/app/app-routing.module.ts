import { Routes } from '@angular/router';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdministradorGuard } from './guardia/administrador.guard';

export const Approutes: Routes = [
    {
        path: '',
        canActivate: [AdministradorGuard],
        children: [
            {
                path: '',
                redirectTo: '/administrador',
                pathMatch: 'full'
            },
            {
                path: 'administrador',
                loadChildren: () => import('./componentes/componentes.module').then(m => m.ComponentesModule)
            }
        ]
    },
    {
        path: 'ingreso',
        component: IngresoComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: '**',
        redirectTo: '/administrador'
    },
    
];