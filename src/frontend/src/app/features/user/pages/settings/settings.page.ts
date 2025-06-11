import { Component } from '@angular/core';
import { NotificationService } from '@core/utils/notification.service';
import { UserService } from '@core/utils/randomUser.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.css'],
})
export class SettingsPage {
  user;

  constructor(
    private readonly notificationService: NotificationService,
    private readonly userService: UserService
  ) {
    this.user = this.userService.user;
  }

  logout() {
    this.notificationService.notify('Acción no válida en Demo', 'warning');
  }
}
