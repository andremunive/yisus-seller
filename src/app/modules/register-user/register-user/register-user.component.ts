import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataModel } from 'src/app/core/models/user.model';
import { SalesService } from 'src/app/services/sales.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  registerUser: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _sales: SalesService,
    private location: Location,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.registerUser = this.formBuilder.group({
      user: ['', [Validators.required]],
      whatsapp: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  register() {
    if (this.registerUser.valid) {
      const usuario = this.registerUser.value['user'];
      this._sales
        .validateUser(usuario)
        .pipe(
          switchMap((users) => {
            if (users['data'].length > 0) {
              this.toast.error(`El usuario ${usuario} ya existe`, 'Error');
              return of(null);
            } else {
              const user: DataModel = {
                data: {
                  user: usuario,
                  whatsapp: this.registerUser.value['whatsapp'],
                  endDate: this.registerUser.value['endDate'],
                  active: true,
                },
              };
              return this._sales.registerUser(user);
            }
          })
        )
        .subscribe(
          (result) => {
            if (result) {
              this.toast.success('Usuario registrado', 'Exito');
              this.registerUser.reset();
            }
          },
          (error) => {
            this.toast.error(`Error registrando el usuario`, 'Error');
          }
        );
    } else {
      this.toast.error(`Rellena todos los datos`, 'Error');
    }
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {}
}
