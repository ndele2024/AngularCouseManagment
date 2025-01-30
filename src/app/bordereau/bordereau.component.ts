import {Component, model} from '@angular/core';
import {Cours} from '../model/cours';

@Component({
  selector: 'app-bordereau',
  imports: [],
  templateUrl: './bordereau.component.html',
  standalone: true,
  styleUrl: './bordereau.component.css'
})
export class BordereauComponent {
  coursCourant = model.required<Cours>();

}
