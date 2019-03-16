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
        component: ForgotComponent
      },
      {
        path: 'lockscreen',
        component: LockscreenComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];
