import {Component, inject, model} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators, FormsModule} from '@angular/forms';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import  {MatLabel, MatError, MatFormFieldModule} from '@angular/material/form-field';
import {Etudiant} from '../model/etudiant';
import {Cours} from '../model/cours';
import { MatIconModule } from '@angular/material/icon';

import { MatTableModule } from '@angular/material/table';



@Component({
  selector: 'app-course-form',
  imports: [
    ReactiveFormsModule,
    MatCardTitle, MatTableModule,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatFormFieldModule,
    MatButtonModule,
    MatDivider,
    MatInputModule,
    MatCardActions,
    MatLabel,
    MatError,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './course-form.component.html',
  standalone: true,
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {
  private formBuilder = inject(FormBuilder);
  coursCourant = model<Cours>();
  listeCours = model.required<Cours[]>();

  formulaire = this.formBuilder.group({
    sigle:[this.coursCourant()?.sigle??'', Validators.required],
    titre:[this.coursCourant()?.titre??'', Validators.required],
    etudiant : this.formBuilder.array(
      this.coursCourant()?.listeEtudiant.map(et =>
        this.formBuilder.group({
          nom: [et.nom??'', Validators.required],
          prenom: [et.prenom??'']
        }))??
      [
      this.formBuilder.group({
        nom: ['', Validators.required],
        prenom: ['']
      })
    ])
  });


  soummettre() {
    const titre = this.formulaire.controls.titre.value;
    const sigle = this.formulaire.controls.sigle.value;
    const formEtudiants = this.formulaire.controls.etudiant.controls;
    let etudiants : Etudiant[] = [];
    for (const formEtudiant of formEtudiants) {
      if(formEtudiant.controls.nom.value){
        etudiants.push(new Etudiant(formEtudiant.controls.nom.value, formEtudiant.controls.prenom.value))
      }
      else {
        alert("le nom des etudiants est requis");
      }
    }
    const cours = new Cours(titre, sigle);
    cours.listeEtudiant = etudiants;
    //this.listeCours.set(this.ajouterCours(cours));
    this.listeCours().push(cours);
    alert("Cours ajouté avec succès");
    this.formulaire.reset();
     //this.affichage.set(0);
  }

  ajouterEtudiant() {
    this.formulaire.controls.etudiant.controls.push(
      this.formBuilder.group({
        nom: ['', Validators.required],
        prenom: ['']
      })
    );
  }

  supprimeLigneEtudiant(index:number){
    this.formulaire.controls.etudiant.controls.splice(index, 1);
  }
}
