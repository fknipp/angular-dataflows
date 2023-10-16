import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-signal-child',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="card" (click)="increase()">
  <p>My child counter is {{this.counterService.counter()}}</p>
  <div class="spacer"></div>
  <button>Increase</button>
</div>`,

  styles: [
  ]
})
export class SignalChildComponent {

  constructor(
    public counterService: CounterService
  ) { }

  increase() {
    this.counterService.counter.update(value => value + 1)
  }
}
