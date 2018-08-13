import { Component } from '@angular/core';
import {CalculadoraComponent} from './calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebasunitarias';

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }
}
