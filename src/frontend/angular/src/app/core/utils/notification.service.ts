import { Injectable, signal } from '@angular/core';
import { Notification } from './models/notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private idCounter = 0;
  private queue: Notification[] = [];
  private current = signal<Notification | null>(null);
  readonly currentNotification = this.current.asReadonly();

  notify(message: string, type: Notification['type']) {
    const id = this.idCounter++;
    this.queue.push({ id, message, type });
    this.processQueue();
  }

  private isProcessing = false;

  private async processQueue() {
    if (this.isProcessing || !this.queue.length) return;

    this.isProcessing = true;

    while (this.queue.length > 0) {
      const next = this.queue.shift()!;
      this.current.set(next);

      await this.delay(3000);

      this.current.set({ ...next, leaving: true });
      await this.delay(500);

      this.current.set(null);
    }

    this.isProcessing = false;
  }

  clearAll() {
    this.queue = [];
    this.current.set(null);
    this.isProcessing = false;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(res => setTimeout(res, ms));
  }
}


