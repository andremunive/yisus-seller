import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { SalesService } from 'src/app/services/sales.service';
import { ToastrService } from 'ngx-toastr';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-reset-user',
  templateUrl: './reset-user.component.html',
  styleUrls: ['./reset-user.component.scss'],
})
export class ResetUserComponent implements OnInit {
  resetUser: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private _sales: SalesService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.resetUser = this.formBuilder.group({
      user: ['', [Validators.required]],
    });
  }

  reset() {
    if (this.resetUser.valid) {
      const usuario = this.resetUser.value['user'];
      this._sales
        .validateUser(usuario)
        .pipe(
          switchMap((users) => {
            if (users['data'].length < 1) {
              this.toast.error(`El usuario ${usuario} no existe`, 'Error');
              return of(null);
            } else {
              return this._sales.resetUser(users['data'][0].id + '');
            }
          })
        )
        .subscribe(
          (result) => {
            if (result) {
              this.toast.success('Usuario reseteado', 'Exito');
              this.resetUser.reset();
            }
          },
          (error) => {
            this.toast.error(`Error reseteando el usuario`, 'Error');
          }
        );
    } else {
      this.toast.error(`Rellena todos los datos`, 'Error');
    }
  }

  goBack() {
    this.location.back();
  }
}
