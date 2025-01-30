import {Etudiant} from './etudiant';

export class Cours{
  listeEtudiant : Etudiant[];
  constructor(public titre:string|null, public sigle:string|null) {
    this.listeEtudiant = [];
  }
}
