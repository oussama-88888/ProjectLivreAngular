import { Component, OnInit } from '@angular/core';
import { Auteur } from '../model/auteur.model';
import { AuthService } from '../services/auth.service';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-liste-auteurs',
  templateUrl: './liste-auteurs.component.html',
  styleUrls: []
})
export class ListeAuteursComponent implements OnInit {

  constructor(private livreService:LivreService,
    public authService: AuthService) { }
auteurs!:Auteur[];
ajout:boolean=true;


updatedAut:Auteur = {"idAut":0,"nomAut":""};
  

ngOnInit(): void {

 this.chargerAuteurs();

  }
  chargerAuteurs():void{
    this.livreService.listeAuteurs().
subscribe(auts => {this.auteurs = auts._embedded.auteurs;
console.log(auts);
});

  }
  auteurUpdated(aut: Auteur) {
   console.log("auteur recu du composant update auteur",aut)
   this.livreService.ajouterAuteur(aut).subscribe( ()=> this.chargerAuteurs());
  }
  updateAut(aut :Auteur){
    
  
      this.updatedAut=aut;
      this.ajout=false;
      
  }
  supprimerAuteur(l: Auteur)
  {
  let conf = confirm("Etes-vous sûr de supprimer l'auteur ?");
  if (conf)
  this.livreService.supprimerAuteur(l.idAut).subscribe(() => {
  console.log("auteur supprimé");
  this.chargerAuteurs();

  });
  } 


}
