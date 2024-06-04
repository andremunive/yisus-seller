import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewUserRoutingModule } from './renew-user-routing.module';
import { RenewUserComponent } from './renew-user/renew-user.component';


@NgModule({
  declarations: [
    RenewUserComponent
  ],
  imports: [
    CommonModule,
    RenewUserRoutingModule
  ]
})
export class RenewUserModule { }
