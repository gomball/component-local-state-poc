import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      role="button"
      class="btn mr-4"
      [class.btn-outline-primary]="!rla.isActive"
      [class.btn-primary]="rla.isActive"
      [routerLink]="link"
      routerLinkActive
      #rla="routerLinkActive"
      >
        <ng-content></ng-content>
      </a
    >
  `,
  styles: [],
})
export class LinkButtonComponent {
  @Input() link: string;
}
