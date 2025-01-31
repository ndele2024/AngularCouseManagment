import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-entete',
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './entete.component.html',
  standalone: true,
  styleUrl: './entete.component.css'
})
export class EnteteComponent {
  title : string = "MON APPLICATION"

}
