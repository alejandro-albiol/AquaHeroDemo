import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '@core/utils/notification.service';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  notification;

  constructor(private notificationService: NotificationService) {
     this.notification = this.notificationService.currentNotification
  }

  getClass(type: string | null | undefined): string {
    return {
      success: 'success',
      error: 'error',
      warning: 'warning',
    }[type ?? ''] ?? '';
  }
}

