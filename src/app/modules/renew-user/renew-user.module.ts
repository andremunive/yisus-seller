import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewUserRoutingModule } from './renew-user-routing.module';
import { RenewUserComponent } from './renew-user/renew-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RenewUserComponent],
  imports: [CommonModule, RenewUserRoutingModule, ReactiveFormsModule],
})
export class RenewUserModule {}
