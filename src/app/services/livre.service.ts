import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Auteur } from '../model/auteur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuteurWrapper } from '../model/auteurWrapped.model';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'

})
export class LivreService {
  apiURL: string = 'http://localhost:8080/livres/api';
  apiURLAut: string = 'http://localhost:8080/livres/aut';


  livres!: Livre[];


  constructor(private http: HttpClient,
    private authService :AuthService) {

/*
   this.livres = [{idLivre : 1, nomLivre : "PC Asus", prixLivre : 3000.600, dateCreation : new Date("01/14/2011"),
    auteur : {idAut : 1, nomAut : "PC"} },
   {idLivre : 2, nomLivre : "Imprimante Epson", prixLivre : 450, dateCreation : new Date("12/17/2010"),
  auteur :  {idAut : 2, nomAut : "Imprimante"}},
   {idLivre : 3, nomLivre :"Tablette Samsung", prixLivre : 900.123, dateCreation : new Date("02/20/2020"), 
   auteur : {idAut : 1, nomAut : "PC"}}
      
    ];*/
  }

  
  listeLivre(): Observable<Livre[]> {
   
return this.http.get<Livre[]>(this.apiURL+"/all");
  }
  
  ajouterLivre(liv: Livre): Observable<Livre> {
    
    return this.http.post<Livre>(this.apiURL, liv);
    
  }

  supprimerLivre(id: number) {
    const url = `${this.apiURL}/${id}`;

return this.http.delete(url);
  }

  
  supprimerAuteur(id: number) {
    const url = `${this.apiURLAut}/${id}`;

return this.http.delete(url);
  }

  
  consulterLivre(id: number): Observable<Livre> {
    const url = `${this.apiURL}/${id}`;
    
    return this.http.get<Livre>(url);
    
  }
  
  updateLivre(prod: Livre): Observable<Livre> {
    
return this.http.put<Livre>(this.apiURL, prod);
  }

  listeAuteurs():Observable<AuteurWrapper>{
    
    return this.http.get<AuteurWrapper>(this.apiURLAut);
    }
  rechercherParAuteur(idAut: number): Observable<Livre[]> {
    const url = `${this.apiURL}/livaut/${idAut}`;
    return this.http.get<Livre[]>(url);
  }

  rechercherParNom(nom: string): Observable<Livre[]> {
    const url = `${this.apiURL}/livsByName/${nom}`;
    return this.http.get<Livre[]>(url);
  }
 
  ajouterAuteur( aut: Auteur):Observable<Auteur>{
    return this.http.post<Auteur>(this.apiURLAut, aut, httpOptions);
   
  }
  
  trierLivres() {
    this.livres = this.livres.sort((n1, n2) => {
      if (n1.idLivre > n2.idLivre) {
        return 1;
      }
      if (n1.idLivre < n2.idLivre) {
        return -1;
      }
      return 0;
    });
  }
}