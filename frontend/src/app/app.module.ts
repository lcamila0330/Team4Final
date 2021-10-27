import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DataService } from './services/data.service';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { OlvidecontrasenaComponent } from './components/olvidecontrasena/olvidecontrasena.component';
import { AjustesdeperfilComponent } from './components/ajustesdeperfil/ajustesdeperfil.component';
import { BusquedahotelhabitacionComponent } from './components/busquedahotelhabitacion/busquedahotelhabitacion.component';
import { DarsedebajaComponent } from './components/darsedebaja/darsedebaja.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HistorialComponent } from './components/historial/historial.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Login2Component } from './components/login2/login2.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { Index1Component } from './components/index1/index1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    SignupComponent,
    OlvidecontrasenaComponent,
    AjustesdeperfilComponent,
    BusquedahotelhabitacionComponent,
    DarsedebajaComponent,
    GaleriaComponent,
    HistorialComponent,
    InicioComponent,
    Login2Component,
    RegistrarseComponent,
    ReservaComponent,
    Index1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
