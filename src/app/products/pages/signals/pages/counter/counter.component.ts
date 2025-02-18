import {Component, computed, signal} from '@angular/core';

@Component({
    templateUrl: './counter.component.html',
    standalone: false
})
export class CounterComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter());
  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
