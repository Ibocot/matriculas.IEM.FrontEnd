import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentesRoutes } from './componentes.routing';
import { InicioComponent } from './inicio/inicio.component';
import { OtroComponent } from './otro/otro.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ComponentesRoutes),
    ],
    declarations: [InicioComponent, OtroComponent],
})
export class ComponentesModule { }