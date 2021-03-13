import { Query, Store } from '@datorama/akita';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

class ComponentLocalQuery<TState> extends Query<TState> {
  private destroy$$ = new Subject<void>();
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
    return this.streams.get(k as string).pipe(takeUntil(this.destroy$$.asObservable()));
  }

  destroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
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
    this.query.destroy();
  }
}

export function getStore<T extends Record<string, any>>(name: string, initialState: T): ComponentLocalStore<T> {
  return new ComponentLocalStore<T>(name, initialState);
}
