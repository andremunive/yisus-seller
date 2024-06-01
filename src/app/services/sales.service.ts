import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DataModel } from '../core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  constructor(private http: HttpClient) {}

  registerUser(user: DataModel) {
    return this.http.post(
      environment.URL_BASE + environment.host.users.methods.clients,
      user
    );
  }

  validateUser(user: string) {
    return this.http.get(
      `${environment.URL_BASE}${environment.host.users.methods.clients}?filters[user][$eq]=${user}`
    );
  }
}
