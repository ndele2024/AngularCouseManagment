import {Component, model} from '@angular/core';
import {Cours} from '../model/cours';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-bordereau',
  imports: [
    MatButton
  ],
  templateUrl: './bordereau.component.html',
  standalone: true,
  styleUrl: './bordereau.component.css'
})
export class BordereauComponent {
  coursCourant = model<Cours>();
  affichage = model<number>();

  editerCours() {
    this.affichage.set(1);
    console.log(this.coursCourant());
  }
}
