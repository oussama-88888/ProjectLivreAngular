import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Auteur } from '../model/auteur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { AuteurWrapper } from '../model/auteurWrapped.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'

})
export class LivreService {

  apiURLAut: string = 'http://localhost:8080/livres/aut';


  livres: Livre[];


  constructor(private http: HttpClient) {


    this.livres = [
      {
        idLivre: 1, nomLivre: "Le Rouge et le Noir", prixLivre: 300.600, dateCreation
          : new Date("01/14/2011"), auteur: { idAut: 1, nomAut: "mohamed el fehmi" }
      },
      {
        idLivre: 2, nomLivre: "Jamais sans ma fille", prixLivre: 450,
        dateCreation: new Date("12/17/2010"), auteur: { idAut: 2, nomAut: "kamoun" }
      },
      {
        idLivre: 3, nomLivre: "La nuit des temps", prixLivre: 900.123,
        dateCreation: new Date("01/20/2022"), auteur: { idAut: 3, nomAut: "mohamed el fehmi" }
      }
    ];
  }

  /*listeLivre():Livre[]{
    return this.livres;
  }*/
  listeLivre(): Observable<Livre[]> {
    return this.http.get<Livre[]>(apiURL);
  }
  /*listeAuteurs():Auteur[]{
    return this.auteurs;
  }*/
  ajouterLivre(liv: Livre): Observable<Livre> {
    return this.http.post<Livre>(apiURL, liv, httpOptions);
  }

  supprimerLivre(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterLivre(id: number): Observable<Livre> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Livre>(url);
  }
  /*consulterAuteur(id:number):Auteur{
    return this.auteurs.find(aut =>aut.idAut==id)!;
  }*/
  updateLivre(prod: Livre): Observable<Livre> {
    return this.http.put<Livre>(apiURL, prod, httpOptions);
  }

  listeAuteurs(): Observable<AuteurWrapper> {
    return this.http.get<AuteurWrapper>(this.apiURLAut);
  }
  rechercherParAuteur(idAut: number): Observable<Livre[]> {
    const url = `${apiURL}/livaut/${idAut}`;
    return this.http.get<Livre[]>(url);
  }

  rechercherParNom(nom: string): Observable<Livre[]> {
    const url = `${apiURL}/livsByName/${nom}`;
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