import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionChildComponent } from './function-child.component';

@Component({
  selector: 'app-function',
  standalone: true,
  imports: [CommonModule, FunctionChildComponent],
  template: `
  <h1>Function</h1>
  <h2>The counter is {{counter}}</h2>
  <p>This is like React and should not be used within Angular</p>
  <div class="card-container">
    <app-function-child [counter]="counter" [setCounter]="setCounter"/>
    <app-function-child [counter]="counter" [setCounter]="setCounter"/>
    <app-function-child [counter]="counter" [setCounter]="setCounter"/>
  </div>
  `,
  styles: [
  ]
})
export class FunctionComponent {
  counter = 1;
  
  // This function must be declared using the arrow syntax for correct binding.
  setCounter = (newValue:number) => {
    console.log(`Counting to ${newValue}`)
    this.counter = newValue;
  }
}
