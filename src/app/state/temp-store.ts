import { Query, Store } from '@datorama/akita';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class TempStore<TState> extends Query<TState> {
  private readonly destroy$$ = new Subject<void>();
  private readonly streams = new Map<string, Observable<any>>();

  constructor(name: string, initialState: TState) {
    super(
      new Store<TState>(initialState, { name })
    );
    this.store = this.__store__;
    this.initialilzeStreams(Object.keys(initialState));
  }

  get snapshot(): TState {
    return this.store.getValue();
  }

  private initialilzeStreams(keys: string[]): void {
    keys.forEach((k) => {
      const $ = this.select((state) => state[k]).pipe(takeUntil(this.destroy$$.asObservable()));
      this.streams.set(k, $);
    });
  }

  get$(k: keyof TState): Observable<TState[keyof TState]> {
    return this.streams.get(k as string).pipe(takeUntil(this.destroy$$.asObservable()));
  }

  destroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
    this.store.destroy();
  }

  update(newState: Partial<TState>): void {
    this.store.update((state) => ({ ...state, ...newState }))
  }
}

export function getTempStore<T extends Record<string, any>>(name: string, initialState: T): TempStore<T> {
  return new TempStore<T>(name, initialState);
}
