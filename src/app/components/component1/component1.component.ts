import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from 'src/app/services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component implements OnDestroy {
  public counterValue = 0;
  private counterSubscription: Subscription;

  constructor(private counterService: CounterService) {
    this.counterSubscription = this.counterService.counter2$.subscribe(
      (counter: number) => {
        this.counterValue = counter;
      }
    );
  }

  public incrementCounter() {
    this.counterService.incrementCounterCompoment1();
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
