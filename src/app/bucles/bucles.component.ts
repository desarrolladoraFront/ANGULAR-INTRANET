import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas : Persona [] = [
    {nombre: 'Ana', edad: 49},
    {nombre: 'Angel', edad: 52},
    {nombre: 'Danae', edad: 18},
    {nombre: 'Emiliano', edad: 15},
    {nombre: 'Sofía', edad: 6}
  ]
}
