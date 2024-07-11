import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  registerUser() {
    this.router.navigate([`/register`]);
  }
  resetUser() {
    this.router.navigate([`/reset`]);
  }

  renewUser() {
    this.router.navigate([`/renew`]);
  }
}
