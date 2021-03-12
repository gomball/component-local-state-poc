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
          <app-link-button link="/first">first</app-link-button>
          <app-link-button link="/second">second</app-link-button>
          <app-link-button link="/both">both</app-link-button>
          <app-link-button link="/none">none</app-link-button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="frame border border-primary rounded m-2 p-2">
            <router-outlet name="firstOutlet"></router-outlet>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="frame border border-primary rounded m-2 p-2">
            <router-outlet name="secondOutlet"></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .frame {
        min-height: 400px;
      }
    `,
  ],
})
export class AppRootComponent {}
