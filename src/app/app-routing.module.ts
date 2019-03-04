import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent, AuthLayoutComponent } from './core';
import { ViasAuthService } from './core/services/vias-auth.service';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './core/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'purchasing',
        loadChildren: './purchasing/purchasing.module#PurchasingModule',
        canActivate: [ViasAuthService]
      },
      {
        path: 'planning',
        loadChildren: './planning/planning.module#PlanningModule',
        canActivate: [ViasAuthService]
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'account',
        loadChildren: './core/account/account.module#AccountModule'
      },
      {
        path: 'error',
        loadChildren: './core/error/error.module#ErrorModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
