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
        path: 'framework',
        loadChildren: './framework/framework.module#FrameworkModule'
      },
      {
        path: 'hr',
        loadChildren: './hr/hr.module#HrModule'
      },
      {
        path: 'ims',
        loadChildren: './ims/ims.module#ImsModule'
      },
      {
        path: 'maintenance',
        loadChildren: './maintenance/maintenance.module#MaintenanceModule'
      },
      {
        path: 'nb-design',
        loadChildren: './nb-design/nb-design.module#NbDesignModule'
      },
      {
        path: 'nb-marketing',
        loadChildren: './nb-marketing/nb-marketing.module#NbMarketingModule'
      },
      {
        path: 'nb-planning',
        loadChildren: './nb-planning/nb-planning.module#NbPlanningModule'
      },
      {
        path: 'nb-production',
        loadChildren: './nb-production/nb-production.module#NbProductionModule'
      },
      {
        path: 'nb-qc',
        loadChildren: './nb-qc/nb-qc.module#NbQcModule'
      },
      {
        path: 'ohs',
        loadChildren: './ohs/ohs.module#OhsModule'
      },
      {
        path: 'planning',
        loadChildren: './planning/planning.module#PlanningModule'
      },
      {
        path: 'purchasing',
        loadChildren: './purchasing/purchasing.module#PurchasingModule'
      },
      {
        path: 'repair-design',
        loadChildren: './repair-design/repair-design.module#RepairDesignModule'
      },
      {
        path: 'repair-marketing',
        loadChildren: './repair-marketing/repair-marketing.module#RepairMarketingModule'
      },
      {
        path: 'repair-planning',
        loadChildren: './repair-planning/repair-planning.module#RepairPlanningModule'
      },
      {
        path: 'repair-production',
        loadChildren: './repair-production/repair-production.module#RepairProductionModule'
      },
      {
        path: 'repair-qc',
        loadChildren: './repair-qc/repair-qc.module#RepairQcModule'
      },
      {
        path: 'warehouse',
        loadChildren: './warehouse/warehouse.module#WarehouseModule'
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
