import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; 
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component'; 
import { SignupComponent } from './components/signup/signup.component';
import { ReservationComponent } from './components/reservation/reservation.component';
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


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reservation', component: ReservationComponent },  
  { path: 'Olvidecontrasena', component: OlvidecontrasenaComponent },  
  { path: 'Ajustesdeperfil', component: AjustesdeperfilComponent }, 
  { path: 'Busquedahotelhabitacion', component: BusquedahotelhabitacionComponent }, 
  { path: 'Darsedebaja', component: DarsedebajaComponent }, 
  { path: 'Galeria', component: GaleriaComponent }, 
  { path: 'Historial', component: HistorialComponent }, 
  { path: 'Inicio', component: InicioComponent }, 
  { path: 'Login2', component: Login2Component }, 
  { path: 'Registrarse', component: RegistrarseComponent }, 
  { path: 'Reserva', component: ReservaComponent }, 
  { path: 'Index1', component: Index1Component }, 

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
