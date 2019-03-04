import { Routes } from '@angular/router';

import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { LoginComponent } from './login/login.component';

export const AccountRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forgot',
        component: ForgotComponent,
        data: {
          heading: 'Forgot password',
          css: ''
        }
      },
      {
        path: 'lockscreen',
        component: LockscreenComponent,
        data: {
          heading: 'Lockscreen',
          css: ''
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          heading: 'Login',
          css: ''
        }
      }
    ]
  }
];
