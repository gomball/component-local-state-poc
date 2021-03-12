import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { GlobalStore, GlobalState } from './global.store';

@Injectable({ providedIn: 'root' })
export class GlobalQuery extends Query<GlobalState> {
  counter1$ = this.select((state) => state.counter1);
  counter2$ = this.select((state) => state.counter2);

  get snapshot(): GlobalState {
    return this.getValue();
  }
  constructor(protected readonly store: GlobalStore) {
    super(store);
  }
}
