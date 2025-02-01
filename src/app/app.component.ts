import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {EnteteComponent} from './entete/entete.component';
import {FooterComponent} from './footer/footer.component';
import {Cours} from './model/cours';
import {MenuComponent} from './menu/menu.component';
import {CourseFormComponent} from './course-form/course-form.component';
import {BordereauComponent} from './bordereau/bordereau.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnteteComponent, FooterComponent, MenuComponent, CourseFormComponent, BordereauComponent, NgOptimizedImage, FormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercice3-angular';
  listeCours : Cours[] = [];
  affichage : number = 0;
  coursCourant : Cours|undefined;
}
