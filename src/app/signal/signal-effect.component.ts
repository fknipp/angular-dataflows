import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-signal-effect',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="card">
  <p>{{updateMessage}}</p>
</div>
  `,
  styles: [
  ]
})
export class SignalEffectComponent {

  updateCounter = 0;
  updateMessage = "Waiting for update";

  constructor(
    private counterService: CounterService
  ) {
    effect(() => {
      console.log('Effect');
      this.updateCounter++;
      this.updateMessage = `#${this.updateCounter}: Counter updated to ${this.counterService.counter()} on ${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}.`;
    });
  }
}
