import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterUserRoutingModule } from './register-user-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterUserComponent],
  imports: [CommonModule, RegisterUserRoutingModule, ReactiveFormsModule],
})
export class RegisterUserModule {}
