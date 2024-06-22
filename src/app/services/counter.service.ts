import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  private counterSubject1 = new BehaviorSubject<number>(0);
  private counterSubject2 = new BehaviorSubject<number>(0);

  counter1$: Observable<number> = this.counterSubject1.asObservable();
  counter2$: Observable<number> = this.counterSubject2.asObservable();

  // Incrementcount
  public incrementCounterCompoment1() {
    this.counterSubject1.next(this.counterSubject1.value + 1);
  }

  // Incrementcount
  public incrementCounterCompoment2() {
    this.counterSubject2.next(this.counterSubject2.value + 1);
  }
}
