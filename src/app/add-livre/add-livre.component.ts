import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auteur } from '../model/auteur.model';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html'
})
export class AddLivreComponent implements OnInit {
  newLivre=new Livre();
  auteurs! : Auteur[];
  newIdAut! : number;
  newAuteur! : Auteur;
  
  constructor(private livreService : LivreService,
    private router:Router) { }

  ngOnInit(): void {
    this.livreService.listeAuteurs().
    subscribe(auts => { this.auteurs=auts._embedded.auteurs;
    console.log(auts);
    });
  }
  
  
  addLivre(){
    this.newLivre.auteur = this.auteurs.find(aut => aut.idAut == this.newIdAut)!;
    this.livreService.ajouterLivre(this.newLivre)
    .subscribe(liv => {
      console.log(liv);
    this.router.navigate(['livres']);
    });
    }
}
