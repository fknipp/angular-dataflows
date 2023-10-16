import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  secondsCounter = interval(1000);

  constructor() { }
}
