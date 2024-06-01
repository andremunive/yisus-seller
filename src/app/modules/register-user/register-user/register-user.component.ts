import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataModel, UserModel } from 'src/app/core/models/user.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  registerUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private _sales: SalesService) {}

  ngOnInit(): void {
    this.registerUser = this.formBuilder.group({
      user: ['', [Validators.required]],
      whatsapp: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  register() {
    if (this.registerUser.valid) {
      const user: DataModel = {
        data: {
          user: this.registerUser.value['user'],
          whatsapp: this.registerUser.value['whatsapp'],
          endDate: this.registerUser.value['endDate'],
          active: true,
        },
      };
      this._sales.registerUser(user).subscribe((res) => {
        console.log(res);
      });
    }
  }

  onSubmit() {}
}
