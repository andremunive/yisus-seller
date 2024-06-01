import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthModel } from 'src/app/core/models/user-auth.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth
        .login(this.loginForm.value['user'], this.loginForm.value['password'])
        .subscribe(
          (res: UserAuthModel) => {
            this.auth.saveLogin(res);
            this.router.navigate([`/home`]);
          },
          (error) => {
            console.error(error.error);
          }
        );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
