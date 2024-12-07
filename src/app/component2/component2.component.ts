import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextDivService } from '../text-div.service';
import { Llibre } from '../llibre';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  llibre: Llibre | null = null;

  constructor(private textService: TextDivService) {}

  ngOnInit(): void {
    this.llibre = this.textService.getLlibre();
  }
}
