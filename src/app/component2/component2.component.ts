import { Component, OnInit } from '@angular/core';
import { TextDivService } from '../text-div.service';

@Component({
  selector: 'app-component2',
  standalone: true,
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  text = '';

  constructor(private textService: TextDivService) {}

  ngOnInit(): void {
    this.text = this.textService.getText();
  }
}
