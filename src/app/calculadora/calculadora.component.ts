import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent {

  constructor() { }
  
  multiply(numberA: number, numberB: number): number {
    return numberA * numberB;
  }
  divide(numberA: number, numberB: number): number {
    if (numberB === 0) {
      return null;
    }
    return numberA / numberB;
  }
}
