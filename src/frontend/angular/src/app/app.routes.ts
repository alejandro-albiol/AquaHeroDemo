import { Routes } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.homeRoutes),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  
  {
    path: 'playground',
    component: PlaygroundComponent,
  },
];
