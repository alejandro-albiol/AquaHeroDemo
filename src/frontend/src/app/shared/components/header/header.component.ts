import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowMenuStateService } from '@core/utils/showMenuState.service';
import { UserService } from '@core/utils/randomUser.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user;

  isMobile: boolean = false;

  constructor(
    private showMenuState: ShowMenuStateService,
    private readonly userService: UserService
  ) {
    this.user = this.userService.user;
  }

  ngOnInit() {
    this.verificarTamanioPantalla();
    
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.verificarTamanioPantalla();
  }

  verificarTamanioPantalla() {
    this.isMobile = window.innerWidth <= 1023;
  }

  showMenu() {
    this.showMenuState.setState();
  }
}
