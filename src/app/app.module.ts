import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRootComponent } from './app-root/app-root.component';
import { AppRoutingModule } from './app-routing.module';
import { EmptyComponent } from './components/empty/empty.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  declarations: [AppRootComponent, EmptyComponent, FirstComponent, SecondComponent],
  providers: [],
  bootstrap: [AppRootComponent],
})
export class AppModule {}
