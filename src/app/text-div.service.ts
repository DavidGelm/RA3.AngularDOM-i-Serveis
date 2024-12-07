import { Injectable } from '@angular/core';
import { Llibre } from './llibre';

@Injectable({
  providedIn: 'root'
})
export class TextDivService {
  private llibre: Llibre | null = null;

  constructor() { }

  setLlibre(newLlibre: Llibre): void {
    this.llibre = newLlibre;
    console.log('Llibre guardat:', this.llibre);
  }

  getLlibre(): Llibre | null {
    return this.llibre;
  }
}
