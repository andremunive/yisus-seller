import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieStorageService } from './cookie-storage.service';
import { UserAuthModel } from '../core/models/user-auth.model';
import { DataModel, UserModel } from '../core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  constructor(private http: HttpClient) {}

  registerUser(user: DataModel) {
    return this.http.post(
      environment.URL_BASE + environment.host.users.methods.register,
      user
    );
  }
}
