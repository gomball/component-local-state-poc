import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRootComponent } from './app-root/app-root.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppRootComponent],
  providers: [],
  bootstrap: [AppRootComponent],
})
export class AppModule {}
