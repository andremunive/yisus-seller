import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
        canActivate: [authGuard],
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./modules/register-user/register-user.module').then(
            (m) => m.RegisterUserModule
          ),
        canActivate: [authGuard],
      },
      {
        path: 'renew',
        loadChildren: () =>
          import('./modules/renew-user/renew-user.module').then(
            (m) => m.RenewUserModule
          ),
      },
      {
        path: 'reset',
        loadChildren: () =>
          import('./modules/reset-user/reset-user.module').then(
            (m) => m.ResetUserModule
          ),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
