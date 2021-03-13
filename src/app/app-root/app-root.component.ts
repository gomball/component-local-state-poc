import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="font-weight-light">Component local state p.o.c.</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button
            type="button"
            class="btn mr-4"
            [class.btn-outline-primary]="!showFirst"
            [class.btn-primary]="showFirst"
            (click)="show('first')"
          >
            first
          </button>
          <button
            type="button"
            class="btn mr-4"
            [class.btn-outline-primary]="!showSecond"
            [class.btn-primary]="showSecond"
            (click)="show('second')"
          >
            second
          </button>
          <button type="button" class="btn btn-outline-primary mr-4" (click)="show('both')">both</button>
          <button type="button" class="btn btn-outline-primary mr-4" (click)="show('none')">none</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="frame border border-primary rounded m-2 p-2">
            <app-first-component *ngIf="showFirst; else empty"></app-first-component>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="frame border border-primary rounded m-2 p-2">
            <app-second-component *ngIf="showSecond; else empty"></app-second-component>
          </div>
        </div>
      </div>
    </div>

    <ng-template #empty>
      <app-empty-component></app-empty-component>
    </ng-template>
  `,
  styles: [
    `
      .frame {
        min-height: 400px;
      }
    `,
  ],
})
export class AppRootComponent {
  showFirst = true;
  showSecond = true;

  show(what: 'first' | 'second' | 'both' | 'none'): void {
    this.showFirst = ['first', 'both'].includes(what);
    this.showSecond = ['second', 'both'].includes(what);
  }
}
