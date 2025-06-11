import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { MenuSidebarComponent } from '@shared/components/menu-sidebar/menu-sidebar.component';

@Component({
  standalone: true,
  selector: 'app-user',
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css',
  imports: [
    RouterOutlet,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    MenuSidebarComponent,
  ],
})
export class UserLayoutComponent {
  menuItems = [
    {
      label: 'Settings',
      icon: 'assets/icons/settings.svg',
      route: '/user/settings',
    },
  ];
}
