import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { RankingPage } from './pages/ranking/ranking.page';
import { MapPage } from './pages/map/map.page';
// import { AdminPage } from './pages/admin/admin.page';
// import { EmpresasPage } from './pages/empresas/empresas.page';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'map', pathMatch: 'full' },
      { path: 'map', component: MapPage },
      { path: 'ranking', component: RankingPage },
      // { path: 'admin', component: AdminPage },
      // { path: 'empresas', component: EmpresasPage },
    ],
  },
];
