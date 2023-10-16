import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-observable-child',
  standalone: true,
  imports: [CommonModule],
  template: `
<div [ngSwitch]="subscribed" class="card" (click)="subscribe()">
  <p *ngSwitchCase="true">My child counter is {{seconds}}.</p>
  <p *ngSwitchDefault>Click to start the counter.</p>
</div>`,
  styles: [
  ]
})
export class ObservableChildComponent {
  subscribed = false;
  seconds = 0;

  constructor(
    private timerService:TimerService
  )
 {}

  subscribe() {
    this.subscribed = true;
    this.timerService.secondsCounter.subscribe(seconds => this.seconds = seconds);
  }
}
