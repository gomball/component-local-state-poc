import { ChangeDetectionStrategy, Component } from '@angular/core';
import { getStore } from 'src/app/state/component-local-state';
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
      local counter: {{ localStore.query.get$('counter') | async }}
    </div>`,
  styles: [],
})
export class SecondComponent {
  readonly localStore = getStore('second', { counter: 0 });

  constructor(public readonly globalService: GlobalService, public readonly globalQuery: GlobalQuery) {}

  increment(): void {
    this.localStore.store.update((state) => ({ ...state, counter: state.counter + 1 }));
  }
}
