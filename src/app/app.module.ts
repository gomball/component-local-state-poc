import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from 'src/environments/environment';
import { AppRootComponent } from './app-root/app-root.component';
import { EmptyComponent } from './components/empty/empty.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

@NgModule({
  imports: [BrowserModule, environment.production ? [] : AkitaNgDevtools.forRoot({ name: 'routing manager' })],
  declarations: [AppRootComponent, EmptyComponent, FirstComponent, SecondComponent],
  providers: [],
  bootstrap: [AppRootComponent],
})
export class AppModule {}
