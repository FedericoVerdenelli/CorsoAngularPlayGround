
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/auth/login/login.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { CatalogoLibriComponent } from './views/catalogo/catalogo-libri/catalogo-libri.component';
import { DettaglioUtenteComponent } from './views/utente/dettaglio-utente/dettaglio-utente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalConfigComponent } from './views/catalogo/ngbd-modal-config/ngbd-modal-config.component';
import { HomeComponent } from './views/home/home.component';
import { PreferitiComponent } from './views/preferiti/preferiti.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CatalogoLibriComponent,
    DettaglioUtenteComponent,
    NgbdModalConfigComponent,
    HomeComponent,
    PreferitiComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  providers: [NgbModalConfig, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
