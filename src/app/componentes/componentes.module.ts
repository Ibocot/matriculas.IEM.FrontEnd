import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentesRoutes } from './componentes.routing';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ComponentesRoutes),
    ],
    declarations: [],
})
export class ComponentesModule { }