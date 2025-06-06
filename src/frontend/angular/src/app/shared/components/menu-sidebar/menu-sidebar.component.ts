import { Component, HostListener, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface menuItems {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-menu-sidebar',
  imports: [RouterModule],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.css',
})
export class MenuSidebarComponent implements OnInit {
  @Input()
  menuItems: menuItems[];

  isOpen: boolean = false;

  isMobile: boolean = false;

  ngOnInit() {
    this.verificarTamanioPantalla();
  }

  showMenu() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.verificarTamanioPantalla();
  }

  verificarTamanioPantalla() {
    this.isMobile = window.innerWidth <= 600;
  }
}
