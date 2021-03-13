import { Injectable } from '@angular/core';
import { GlobalState, GlobalStore } from './global.store';

@Injectable({ providedIn: 'root' })
export class GlobalService {
  constructor(private readonly store: GlobalStore) {}

  increment(counter: keyof GlobalState): void {
    this.store.update((state) => ({ ...state, [counter]: state[counter] + 1 }));
  }
}
