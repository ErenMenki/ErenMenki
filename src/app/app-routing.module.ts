import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent, AuthLayoutComponent } from './core';
import { ViasAuthService } from './core/services/vias-auth.service';
import { Deneme2Component } from './deneme2/deneme2.component';

const routes: Routes = [
  { path: '', component: Deneme2Component },
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
        loadChildren: './purchasing/purchasing.module#PurchasingModule'
      },
      {
        path: 'planning',
        loadChildren: './planning/planning.module#PlanningModule'
      }
    ],
    canActivate: [ViasAuthService]
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
    path: '',
    redirectTo: '/dashboard/dashboard',
    pathMatch: 'full',
    canActivate: [ViasAuthService]
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
