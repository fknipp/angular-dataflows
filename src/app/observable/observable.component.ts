import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerService } from './timer.service';
import { ObservableChildComponent } from './observable-child.component';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule, ObservableChildComponent],
  template: `
  <h1>Observable</h1>
  <h2>The counter is {{seconds}}</h2>
  <div class="card-container">
    <app-observable-child/>
    <app-observable-child/>
    <app-observable-child/>
  </div>
  `,
  styles: [
  ]
})
export class ObservableComponent {

  seconds = 0;

  constructor(
    private timerService: TimerService
  ) {
    timerService.secondsCounter.subscribe(seconds => this.seconds = seconds);
  }

}
