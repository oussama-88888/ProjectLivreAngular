import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from '../model/livre.model';
import { AuthService } from '../services/auth.service';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html'
})
export class LivresComponent implements OnInit {

  livres? : Livre[] ;
  

  constructor(private livreService : LivreService,
      public authService: AuthService,
      private router:Router
      ) {

 // this.livres=this.livreService.listeLivre();
  }

  ngOnInit(): void {
    
    this.chargerLivres();
    
    

  }
  chargerLivres(){
    this.livreService.listeLivre().subscribe(prods => {
    console.log(prods);
    this.livres = prods;
    });
    }
    supprimerLivre(l: Livre)
    {
    let conf = confirm("Etes-vous sûr de supprimer le livre ?");
    if (conf)
    this.livreService.supprimerLivre(l.idLivre).subscribe(() => {
    console.log("livre supprimé");
    this.chargerLivres();
  
    });
    } 

}
