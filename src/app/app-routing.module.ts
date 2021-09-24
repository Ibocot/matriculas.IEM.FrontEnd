import { Routes } from '@angular/router';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdministradorGuard } from './guardia/administrador.guard';
import { AdministrarComponent } from './componentes/administrar/administrar.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { HomeComponent } from './componentes/home/home.component';

export const Approutes: Routes = [
    {
        path: 'admin',
        canActivate: [AdministradorGuard],
        component: AdministrarComponent,
        children: [
            {
                path: 'admin',
                redirectTo: 'administrador',
                pathMatch: 'full'
            },
            {
                path: 'administrador',
                loadChildren: () => import('./componentes/componentes.module').then(m => m.ComponentesModule)
            }
        ]
    },
    {
        path: '',
        component: PrincipalComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
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