import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TierListComponent } from './tier-list/tier-list.component';
import { BuildsComponent } from './builds/builds.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: "full" },
  { path: 'builds', component: BuildsComponent, pathMatch: "full" },
  { path: 'tier-list', component: TierListComponent, pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
