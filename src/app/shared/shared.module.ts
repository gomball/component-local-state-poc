import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkButtonComponent } from './components/link-button/link-button.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LinkButtonComponent],
  exports: [LinkButtonComponent]
})
export class SharedModule {}
