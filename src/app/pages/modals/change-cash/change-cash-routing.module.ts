import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeCashPage } from './change-cash.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeCashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeCashPageRoutingModule {}
