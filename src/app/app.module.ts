import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { FormsModule } from '@angular/forms';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParAuteurComponent } from './recherche-par-auteur/recherche-par-auteur.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import {Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeAuteursComponent } from './liste-auteurs/liste-auteurs.component';
import { UpdateAuteurComponent } from './update-auteur/update-auteur.component';
import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    AddLivreComponent,
    UpdateLivreComponent,
    RechercheParAuteurComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeAuteursComponent,
    UpdateAuteurComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
