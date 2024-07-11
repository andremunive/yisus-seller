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

  renewUser(user: DataModel, id: string) {
    return this.http.put(
      environment.URL_BASE + environment.host.users.methods.clients + '/' + id,
      user
    );
  }

  validateUser(user: string) {
    return this.http.get(
      `${environment.URL_BASE}${environment.host.users.methods.clients}?filters[user][$eq]=${user}`
    );
  }

  resetUser(id: string) {
    const reset = {
      data: {
        unique_id: null,
      },
    };
    return this.http.put(
      `${environment.URL_BASE}${environment.host.users.methods.clients}/${id}`,
      reset
    );
  }
}
