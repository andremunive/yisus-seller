import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenewUserComponent } from './renew-user/renew-user.component';

const routes: Routes = [
  {
    path: '',
    component: RenewUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenewUserRoutingModule {}
