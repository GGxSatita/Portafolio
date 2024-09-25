import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamCrudPage } from './team-crud.page';

const routes: Routes = [
  {
    path: '',
    component: TeamCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamCrudPageRoutingModule {}
