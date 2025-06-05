import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';

export const homeRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardPage },
    ],
  },
];
