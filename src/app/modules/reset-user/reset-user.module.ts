import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetUserRoutingModule } from './reset-user-routing.module';
import { ResetUserComponent } from './reset-user/reset-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResetUserComponent],
  imports: [CommonModule, ResetUserRoutingModule, ReactiveFormsModule],
})
export class ResetUserModule {}
