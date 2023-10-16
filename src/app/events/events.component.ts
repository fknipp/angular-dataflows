import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      events works!
    </p>
  `,
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

}
