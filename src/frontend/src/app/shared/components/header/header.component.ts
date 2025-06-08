import { Component, HostListener, WritableSignal } from '@angular/core';
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
  randomUser: WritableSignal<number>;
  data$: Observable<MockData>;

  isMobile: boolean = false;

  constructor(
    private showMenuState: ShowMenuStateService,
    private readonly dashboardService: DashboardService,
    private readonly randomUserService: RandomUserService
  ) {
    this.randomUser = this.randomUserService.randomUser;
  }

  ngOnInit() {
    this.verificarTamanioPantalla();
    this.data$ = this.dashboardService.getData();
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
