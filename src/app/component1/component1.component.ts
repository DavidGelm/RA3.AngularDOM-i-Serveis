import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { TextDivService } from '../text-div.service';

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

  guardarText() {
    const textElement = document.getElementById('textDiv');
    const text = textElement!.innerText;
    console.log('Text guardat', text);
    this.textService.setText(text);
  }
}
