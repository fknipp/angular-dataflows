import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: `
  <h1>Events</h1>
  <h2>The counter is {{counter}}</h2>
  <div class="card-container">
    <app-events-child [counter]="counter" (setCounterEvent)="this.counter = $event"/>
    <app-events-child [counter]="counter" (setCounterEvent)="this.counter = $event"/>
    <app-events-child [counter]="counter" (setCounterEvent)="this.counter = $event"/>
  </div>
  `,
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  counter = 12;
}
