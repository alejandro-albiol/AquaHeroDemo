import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowMenuStateService } from '@core/utils/showMenuState.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user = {
    name: 'Demo',
    email: 'Demo@example.com',
    avatar: 'assets/icons/person.svg',
  };

  isMobile: boolean = false;

  constructor(private showMenuState: ShowMenuStateService) {}

  ngOnInit() {
    this.verificarTamanioPantalla();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.verificarTamanioPantalla();
  }

  verificarTamanioPantalla() {
    this.isMobile = window.innerWidth <= 600;
  }

  showMenu() {
    this.showMenuState.setState();
  }
}
