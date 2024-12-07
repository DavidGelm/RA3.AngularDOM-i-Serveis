import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TextDivService {
  private text = '';

  constructor() { }

  setText(newText: string): void {
    this.text = newText;
    console.log('Text mostrat segon div:', this.text);

  }

  getText() {
    return this.text;
  }
}
