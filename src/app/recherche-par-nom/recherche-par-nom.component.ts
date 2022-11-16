import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: []
})
export class RechercheParNomComponent implements OnInit {
nomLivre!: string ;
livres!:Livre[];
allLivres!:Livre[];
searchTerm!:string;


  constructor(private livreService:LivreService) { }

  ngOnInit(): void {

    this.livreService.listeLivre().subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      });
      
  }
  rechercherlivs(){
    this.livreService.rechercherParNom(this.nomLivre).
    subscribe(livs => {
    this.livres = livs;
    });

  }
  onKeyUp(filterText : string){
    this.livres = this.allLivres.filter(item =>
    item.nomLivre.toLowerCase().includes(filterText));
    }
    
}
