import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from'./add-livre/add-livre.component'
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeAuteursComponent } from './liste-auteurs/liste-auteurs.component';
import { LivreGuard } from './livre.guard';
import { LivresComponent } from './livres/livres.component';
import { LoginComponent } from './login/login.component';

import { RechercheParAuteurComponent } from './recherche-par-auteur/recherche-par-auteur.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';


const routes: Routes = [
  {path:"livres", component:LivresComponent},
  {path : "add-livre", component : AddLivreComponent, canActivate:[LivreGuard]},
  {path:"updateLivre/:id",component:UpdateLivreComponent},
  {path: "rechercheParAuteur", component : RechercheParAuteurComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeAuteurs", component : ListeAuteursComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path:"", redirectTo:"livres",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
