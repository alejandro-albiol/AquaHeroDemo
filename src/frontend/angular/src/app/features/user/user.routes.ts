import { Routes } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout.component';
import { SettingsPage } from './pages/settings/settings.page';

export const userRoutes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
      { path: 'settings', component: SettingsPage },
    ],
  },
];
