import { Component, OnInit } from '@angular/core';
import { TextDivService } from '../text-div.service';
import { Llibre } from '../llibre';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {

  constructor(private textService: TextDivService) {}

  ngOnInit(): void {}

  guardarLlibre(): void {
    const titol = 'El meu primer llibre';
    const tematiques = ['Ficció', 'Aventura'];
    const llibre = new Llibre(titol, tematiques);
    this.textService.setLlibre(llibre);
  }
}
