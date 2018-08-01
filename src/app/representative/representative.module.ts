import { NgModule } from '@angular/core';

import { RepresentativeComponent } from './representative.component';
import { MyRepresentativesComponent } from './my-representatives/my-representatives.component';
import { SharedModule } from '../shared/shared.module';
import { RepresentativeRoutingModule } from './representative-routing.module';

@NgModule({
  declarations: [
    RepresentativeComponent,
    MyRepresentativesComponent
  ],
  imports: [
    SharedModule,
    RepresentativeRoutingModule
  ]
})
export class RepresentativeModule {}
