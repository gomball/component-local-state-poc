import { Query, Store } from '@datorama/akita';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class TempState<TState> extends Query<TState> {
  private readonly destroy$$ = new Subject<void>();
  private readonly streams = new Map<string, Observable<any>>();
  readonly store: Store<TState>;

  constructor(name: string, initialState: TState) {
    super(
      new Store<TState>(initialState, { name })
    );
    this.store = this.__store__;
    this.initialilzeStreams(Object.keys(initialState));
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
}

export function getTempState<T extends Record<string, any>>(name: string, initialState: T): TempState<T> {
  return new TempState<T>(name, initialState);
}
