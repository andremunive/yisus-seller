import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetUserComponent } from './reset-user/reset-user.component';

const routes: Routes = [
  {
    path: '',
    component: ResetUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetUserRoutingModule {}
