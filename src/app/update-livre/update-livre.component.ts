import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auteur } from '../model/auteur.model';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: []
})
export class UpdateLivreComponent implements OnInit {
currentLivre=new Livre();
auteurs! : Auteur[];
updatedAutId! : number;



  constructor(private activatedRoute:ActivatedRoute,
    private router :Router,

              private livreService:LivreService) { }

  ngOnInit(): void {
    this.livreService.listeAuteurs().
subscribe(auts => {this.auteurs = auts._embedded.auteurs;
console.log(auts);
});
    
    this.livreService.consulterLivre
    (this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentLivre = prod;  ;
    this.updatedAutId =this.currentLivre.auteur.idAut;
    });
  }
  updateLivre()
  { 
    this.currentLivre.auteur = this.auteurs.find(aut => aut.idAut == this.updatedAutId)!;
    this.livreService.updateLivre(this.currentLivre).subscribe(prod => {
      this.router.navigate(['livres']); }
      
      );

  }
  
}
