import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalChildComponent } from './signal-child.component';
import { CounterService } from './counter.service';
import { SignalEffectComponent } from './signal-effect.component';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, SignalChildComponent, SignalEffectComponent],
  template: `
  <h1>Signal</h1>
  <h2>The counter is {{this.counterService.counter()}}</h2>
  <p>This demo uses the brand-new Angular Signals.</p>
  <p>The computed value is {{this.counterService.double()}}</p>
  <div class="card-container">
    <app-signal-child/>
    <app-signal-child/>
    <app-signal-child/>
    <app-signal-effect/>
  </div>
  `,
  styles: [
  ]
})
export class SignalComponent {

  constructor(
    public counterService: CounterService
  ) {}

}
