import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from 'src/app/services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component implements OnDestroy {
  public counterValue = 0;
  private counterSubscription: Subscription;

  constructor(private counterService: CounterService) {
    this.counterSubscription = this.counterService.counter1$.subscribe(
      (counter: number) => {
        this.counterValue = counter;
      }
    );
  }

  public incrementCounter1() {
    this.counterService.incrementCounterCompoment2();
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
