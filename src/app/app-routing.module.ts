// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CheesecakesComponent } from './cheesecakes/cheesecakes.component';
import { PiesComponent } from './pies/pies.component';
import { TousdetailsComponent } from './tousdetails/tousdetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'cheesecake', component: CheesecakesComponent },
  { path: 'pies', component: PiesComponent },
  { path: 'tousdetails', component: TousdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
