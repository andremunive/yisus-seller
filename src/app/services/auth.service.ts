import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieStorageService } from './cookie-storage.service';
import { UserAuthModel } from '../core/models/user-auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private cookiesStorageService: CookieStorageService,
    private http: HttpClient,
    private router: Router
  ) {}

  login(user: string, password: string): Observable<UserAuthModel> {
    const credentials = {
      identifier: user,
      password: password,
    };
    const url = `${environment.URL_BASE}${environment.host.auth.methods.login}`;
    return this.http.post<UserAuthModel>(url, credentials);
  }

  saveLogin(user: UserAuthModel) {
    this.cookiesStorageService.setCookie('user.jwt', user.jwt);
    this.cookiesStorageService.setCookie('user.user', user.user.username);
  }

  logOut() {
    this.cookiesStorageService.deleteCookie('user.jwt');
    this.cookiesStorageService.deleteCookie('user.user');
    this.router.navigate([`/`]);
  }
}
