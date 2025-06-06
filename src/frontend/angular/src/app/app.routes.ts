import { Routes } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.homeRoutes),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user.routes').then((m) => m.userRoutes),
  },
  {
    path: 'playground',
    component: PlaygroundComponent,
  },
];
