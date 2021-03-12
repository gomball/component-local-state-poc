import { Component } from '@angular/core';
import { GlobalQuery } from 'src/app/state/global/global.query';
import { GlobalService } from 'src/app/state/global/global.service';

@Component({
  template: `<h2>second component</h2>
  <div class="align-items-md-center d-flex">
    global counter 2: {{ globalQuery.counter2$ | async }}
    <button type="button" class="btn btn-outline-secondary btn-sm mx-2" (click)="globalService.increment('counter2')">increment</button>
  </div>`,
  styles: [],
})
export class SecondComponent {
  constructor(public readonly globalService: GlobalService, public readonly globalQuery: GlobalQuery) {}
}
