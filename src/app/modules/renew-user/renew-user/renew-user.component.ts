import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { of, switchMap } from 'rxjs';
import { DataModel } from 'src/app/core/models/user.model';
import { SalesService } from 'src/app/services/sales.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-renew-user',
  templateUrl: './renew-user.component.html',
  styleUrls: ['./renew-user.component.scss'],
})
export class RenewUserComponent implements OnInit {
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
      endDate: ['', [Validators.required]],
    });
  }

  renew() {
    if (this.registerUser.valid) {
      const usuario = this.registerUser.value['user'];
      this._sales
        .validateUser(usuario)
        .pipe(
          switchMap((users) => {
            if (users['data'].length < 1) {
              this.toast.error(`El usuario ${usuario} no existe`, 'Error');
              return of(null);
            } else {
              const id: number = users['data'][0].id;
              const strId = id.toString();
              const user: DataModel = {
                data: {
                  end_date: this.registerUser.value['endDate'],
                  active: true,
                },
              };
              return this._sales.renewUser(user, strId);
            }
          })
        )
        .subscribe(
          (result) => {
            if (result) {
              this.toast.success('Usuario renovado', 'Exito');
              this.registerUser.reset();
            }
          },
          (error) => {
            console.log(error);
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
