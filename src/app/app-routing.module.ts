import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '' , component: WelcomeComponent },
  {
    path: 'representative',
    loadChildren: './representative/representative.module#RepresentativeModule',
    canLoad: [AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {}
