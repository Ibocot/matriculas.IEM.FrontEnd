import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdministrarComponent } from './componentes/administrar/administrar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { OtroComponent } from './componentes/otro/otro.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MenuComponent } from './componentes/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    RegistroComponent,
    InicioComponent, 
    AdministrarComponent,
    OtroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Approutes, { useHash: true }),
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
