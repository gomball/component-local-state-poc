import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { getTempStore } from 'src/app/state/temp-store';
import { GlobalQuery } from 'src/app/state/global/global.query';
import { GlobalService } from 'src/app/state/global/global.service';

@Component({
  selector: 'app-second-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h2>second component</h2>
    <div class="align-items-md-center d-flex my-1">
      <button type="button" class="btn btn-outline-secondary btn-sm mx-2" (click)="globalService.increment('counter2')">++</button>
      global counter 2: {{ globalQuery.counter2$ | async }}
    </div>
    <div class="align-items-md-center d-flex my-1">
      <button type="button" class="btn btn-outline-secondary btn-sm mx-2" (click)="increment()">++</button>
      local counter: {{ tempStore.get$('counter') | async }}
    </div>`,
  styles: [],
})
export class SecondComponent implements OnDestroy {
  readonly tempStore = getTempStore('second', { counter: 0 });

  constructor(public readonly globalService: GlobalService, public readonly globalQuery: GlobalQuery) {}

  ngOnDestroy(): void {
    this.tempStore.destroy();
  }

  increment(): void {
    const state = this.tempStore.snapshot;
    this.tempStore.update({ counter: state.counter + 1 });
  }
}
