import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { MenuSidebarComponent } from '@shared/components/menu-sidebar/menu-sidebar.component';


@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
  imports: [RouterOutlet, RouterModule, FooterComponent, HeaderComponent, MenuSidebarComponent],
})
export class HomeLayoutComponent {
  menuItems = [
    { label: 'Inicio', icon: 'assets/icons/home.svg', route: '/home/map' },
    {
      label: 'Ranking',
      icon: 'assets/icons/dashboard.svg',
      route: '/home/ranking',
    },
    { label: 'Empresas', icon: 'assets/icons/store.svg', route: '/home/enterprice' },
    { label: 'Noticias', icon: 'assets/icons/newspaper.svg', route: '/home/news' },
  ];
}