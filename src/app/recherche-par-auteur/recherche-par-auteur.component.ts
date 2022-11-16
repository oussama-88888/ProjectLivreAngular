import { Component, OnInit } from '@angular/core';
import { Auteur } from '../model/auteur.model';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-recherche-par-auteur',
  templateUrl: './recherche-par-auteur.component.html',
  styleUrls: []
})
export class RechercheParAuteurComponent implements OnInit {
supprimerLivre(_t26: any) {
throw new Error('Method not implemented.');
}
IdAuteur!: number;
auteurs!: Auteur[];

livres!: Livre[];
  constructor(private livreService:LivreService) { }

  ngOnInit(): void {
    this.livreService.listeAuteurs().
subscribe(auts => {this.auteurs = auts._embedded.auteurs;
console.log(auts);
});

  }
onChange(){
  this.livreService.rechercherParAuteur(this.IdAuteur).
subscribe(prods =>{this.livres=prods});


}
}
