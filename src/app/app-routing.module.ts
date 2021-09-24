import { Routes } from '@angular/router';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdministradorGuard } from './guardia/administrador.guard';
import { AdministrarComponent } from './componentes/administrar/administrar.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

export const Approutes: Routes = [
    {
        path: '',
        canActivate: [AdministradorGuard],
        component: AdministrarComponent,
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
        path: 'principal',
        component: PrincipalComponent,
        children: [
            {
                path: 'ingreso',
                component: IngresoComponent
            },
            {
                path: 'registro',
                component: RegistroComponent
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/administrador'
    },
    
];