import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-function-child',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="card" (click)="setCounter(counter + 1)">
  <p>My child counter is {{counter}}</p>
  <div class="spacer"></div>
  <button>Increase</button>
</div>`,
  styles: [
  ]
})
export class FunctionChildComponent {
  @Input() counter!: number;
  @Input() setCounter!: (counter: number) => void;
}
