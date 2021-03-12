import { Component } from '@angular/core';
import { GlobalQuery } from 'src/app/state/global/global.query';
import { GlobalService } from 'src/app/state/global/global.service';

@Component({
  template: `<h2>first component</h2>
    <div class="align-items-md-center d-flex">
      global counter 1: {{ globalQuery.counter1$ | async }}
      <button type="button" class="btn btn-outline-secondary btn-sm mx-2" (click)="globalService.increment('counter1')">increment</button>
    </div>`,
  styles: [],
})
export class FirstComponent {
  constructor(public readonly globalService: GlobalService, public readonly globalQuery: GlobalQuery) {}
}
