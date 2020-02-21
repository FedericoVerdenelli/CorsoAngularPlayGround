import { DettaglioUtenteComponent } from './views/utente/dettaglio-utente/dettaglio-utente.component';
import { CatalogoLibriComponent } from './views/catalogo/catalogo-libri/catalogo-libri.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { LoginComponent } from './views/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    pathMatch: 'full',
    component: SignupComponent
  },
  {
    path: 'libreria',
    pathMatch: 'full',
    component: CatalogoLibriComponent
  },
  {
    path: 'profilo-utente',
    pathMatch: 'full',
    component: DettaglioUtenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }