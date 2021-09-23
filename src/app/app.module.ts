import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdministrarComponent } from './componentes/administrar/administrar.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    RegistroComponent,
    AdministrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Approutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
