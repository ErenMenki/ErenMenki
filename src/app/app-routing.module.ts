import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent, AuthLayoutComponent } from './core';
import { ViasAuthService } from './core/services/vias-auth.service';
import { DenemeComponent } from './deneme/deneme.component';

const routes: Routes = [
  { path: '', component: DenemeComponent },
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
