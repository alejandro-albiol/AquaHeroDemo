import { AsyncPipe } from '@angular/common';
import { Component, WritableSignal } from '@angular/core';
import { DashboardService } from '@core/services/demo/dashboard.service';
import { MockData } from '@core/services/demo/models/dashboard.model';
import { Observable } from 'rxjs';
import { NotificationService } from '@core/utils/notification.service';
import { RandomUserService } from '@core/utils/randomNumberStat.service';

@Component({
  selector: 'app-settings',
  imports: [AsyncPipe],
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.css'],
})
export class SettingsPage {
  data$: Observable<MockData>;
  randomUser: number;

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly notificationService: NotificationService,
    private readonly randomUserService: RandomUserService
  ) {
    this.randomUser = this.randomUserService.randomUser();
    this.data$ = this.dashboardService.getData();
  }

  logout() {
    this.notificationService.notify('Acción no válida en Demo', 'warning')
  }
}
