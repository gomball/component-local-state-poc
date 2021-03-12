import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  {
    path: 'first',
    children: [
      { path: '', outlet: 'firstOutlet', component: FirstComponent },
      { path: '', outlet: 'secondOutlet', component: EmptyComponent },
    ],
  },
  {
    path: 'second',
    children: [
      { path: '', outlet: 'firstOutlet', component: EmptyComponent },
      { path: '', outlet: 'secondOutlet', component: SecondComponent },
    ],
  },
  {
    path: 'both',
    children: [
      { path: '', outlet: 'firstOutlet', component: FirstComponent },
      { path: '', outlet: 'secondOutlet', component: SecondComponent },
    ],
  },
  {
    path: 'none',
    children: [
      { path: '', outlet: 'firstOutlet', component: EmptyComponent },
      { path: '', outlet: 'secondOutlet', component: EmptyComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
