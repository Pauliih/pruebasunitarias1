import { Component } from '@angular/core';
import {Calculator} from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebasunitarias';

  ngOnInit(): void {
    let calculator = new Calculator();
    let result = calculator.multiply(3, 3);
    console.log(result === 9); // 'Test passed'
    console.log(result !== 12); // 'Test passed'
  }
}
