import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface GlobalState {
  counter1: number;
  counter2: number;
}

export function createInitialGlobalState(): GlobalState {
  return {
    counter1: 0,
    counter2: 0,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'global' })
export class GlobalStore extends Store<GlobalState> {
  constructor() {
    super(createInitialGlobalState());
  }
}
