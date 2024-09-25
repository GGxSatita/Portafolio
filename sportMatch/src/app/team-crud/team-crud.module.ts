import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamCrudPageRoutingModule } from './team-crud-routing.module';

import { TeamCrudPage } from './team-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamCrudPageRoutingModule
  ],
  declarations: [TeamCrudPage]
})
export class TeamCrudPageModule {}
