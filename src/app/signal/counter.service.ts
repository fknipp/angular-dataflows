import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = signal(1);
  double = computed(() => this.counter() * 2);

  constructor() { }
}
