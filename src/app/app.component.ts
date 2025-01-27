import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EnteteComponent} from './entete/entete.component';
import {FooterComponent} from './footer/footer.component';
import {Cours} from './model/cours';
import {MenuComponent} from './menu/menu.component';
import {CourseFormComponent} from './course-form/course-form.component';
import {BordereauComponent} from './bordereau/bordereau.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnteteComponent, FooterComponent, MenuComponent, CourseFormComponent, BordereauComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercice3-angular';
  listeCours : Cours[] = [
    new Cours("Java", "Java"),
    new Cours("Angular", "Angular"),
    new Cours("React", "React")
  ];
  affichage : number = 0;
}
