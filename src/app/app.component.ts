import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
// @ts-ignore
import {yellowSubmarine,changeSize,countWords,mostrarllista} from './funcions.js';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Component1Component,Component2Component,CommonModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ExercicisAngularDomiServeisDavidGelmaDam1';
  constructor(){}

  ngOnInit(){
    const element = document.getElementById('text');
    element!.innerText = element!.innerText.toUpperCase();

    const Url = document.getElementById('url');
    Url!.innerText = document.URL;

    const contar = countWords('lorem');

    const Comptador = document.getElementById('comptador');
    Comptador!.innerText = `El paragraf conte ${contar} paraules.`;

    const imatge = document.getElementById('imatge');
    imatge!.innerHTML = '<img src="https://cw.gunow.co/wp-content/uploads/2024/07/Captura-de-pantalla-2024-07-17-161315.png">';

    yellowSubmarine("text");
    changeSize('50px','100px','taula');

    console.log(mostrarllista("select","resultatcontllista"))

  }
}
