import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `


    <button (click)="decrement()">-</button>

    Counter: {{counter}}

    <button (click)="increment()">+</button>
  `
})
export class AppComponent {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
