import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongsModalPageRoutingModule } from './songs-modal-routing.module';

import { SongsModalPage } from './songs-modal.page';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: SongsModalPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongsModalPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SongsModalPage]
})
export class SongsModalPageModule {}
