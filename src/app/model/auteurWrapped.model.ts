import { Auteur } from './auteur.model';
export class AuteurWrapper{
_embedded!: { auteurs: Auteur[]};
}