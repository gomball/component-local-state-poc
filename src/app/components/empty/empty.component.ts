import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-empty-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p>empty component: anything that was here is now destroyed.</p>`,
  styles: [],
})
export class EmptyComponent {}
