import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() counter!: number;
  @Output() setCounterEvent = new EventEmitter<number>();

  increaseCounter() {
    this.setCounterEvent.emit(this.counter + 1);
  }
}
