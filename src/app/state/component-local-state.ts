import { Query, Store } from '@datorama/akita';
import { Observable } from 'rxjs';

class ComponentLocalQuery<TState> extends Query<TState> {
  private readonly streams = new Map<string, Observable<any>>();

  constructor(store: Store<TState>, initialState: TState) {
    super(store);
    Object.keys(initialState).forEach((k) =>
      this.streams.set(
        k,
        this.select((state) => state[k])
      )
    );
  }

  get$(k: keyof TState): Observable<TState[keyof TState]> {
    return this.streams.get(k as string);
  }
}

export class ComponentLocalStore<T> {
  store: Store<T>;
  query: ComponentLocalQuery<T>;

  constructor(name: string, initialState: T) {
    this.store = new Store<T>(initialState, { name });
    this.query = new ComponentLocalQuery(this.store, initialState);
  }

  destroy(): void {
    this.store.destroy();
  }
}

export function getStore<T extends Record<string, any>>(name: string, initialState: T): ComponentLocalStore<T> {
  return new ComponentLocalStore<T>(name, initialState);
}
