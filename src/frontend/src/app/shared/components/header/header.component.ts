import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowMenuStateService } from '@core/utils/showMenuState.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { MockData } from '@core/services/demo/models/dashboard.model';
import { DashboardService } from '@core/services/demo/dashboard.service';
import { RandomUserService } from '@core/utils/randomNumberStat.service';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  data$: Observable<MockData>;
  randomUser: number;

  isMobile: boolean = false;

  constructor(
    private showMenuState: ShowMenuStateService,
    private readonly dashboardService: DashboardService,
    private readonly randomUserService: RandomUserService
  ) {
    this.randomUser = this.randomUserService.randomUser();
    this.data$ = this.dashboardService.getData();
  }

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
