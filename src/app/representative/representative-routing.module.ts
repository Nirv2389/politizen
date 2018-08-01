import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepresentativeComponent } from './representative.component';

const routes: Routes = [
  {
    path: '',
    component: RepresentativeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentativeRoutingModule {}
