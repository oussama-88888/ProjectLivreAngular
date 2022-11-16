import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Auteur } from '../model/auteur.model';

@Component({
  selector: 'app-update-auteur',
  templateUrl: './update-auteur.component.html',
  styleUrls: []
})
export class UpdateAuteurComponent implements OnInit {

  @Input()
  auteur! : Auteur;
  @Output()
auteurUpdated = new EventEmitter<Auteur>();
@Input()
ajout!:boolean;
  
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateAuteur ",this.auteur);
  
  }
  saveAuteur() {
    this.auteurUpdated.emit(this.auteur);

    }

}
