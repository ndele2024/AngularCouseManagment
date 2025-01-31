import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    auteur = "Romuald ASONMENE"
    titre = "INF1015 Environnement de Développement et Composante Logicielle"
}
