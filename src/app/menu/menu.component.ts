import {Component, input, model} from '@angular/core';
import {Cours} from '../model/cours';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: [
    MatButton
  ],
  templateUrl: './menu.component.html',
  standalone: true,
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  listeCours = model.required<Cours[]>();
  affichage = model.required<number>();
  coursCourant = model<Cours>();

  showCours(cours: Cours) {
    //modification du cours courant a afficher dans le bordereau
    this.coursCourant.set(cours);
    console.log(cours);
    //affichage de la page du bordereau
    this.affichage.set(2);
  }

  affichageNouveauCour() {
    this.affichage.set(1);
  }
}
