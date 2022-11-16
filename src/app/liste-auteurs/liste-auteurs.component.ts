import { Component, OnInit } from '@angular/core';
import { Auteur } from '../model/auteur.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-liste-auteurs',
  templateUrl: './liste-auteurs.component.html',
  styleUrls: []
})
export class ListeAuteursComponent implements OnInit {

  constructor(private livreService:LivreService) { }
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
  
      this.updatedAut=aut;
      this.ajout=false;
      
  }

    

}
