import { Injectable, signal } from '@angular/core';
import { DashboardService } from '@core/services/demo/dashboard.service';
import { MockData, User } from '@core/services/demo/models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _user = signal<User | null>(null);
  readonly user = this._user.asReadonly();

  constructor(private dashboardService: DashboardService) {}

  loadRandomUser() {
    this.dashboardService.getData().subscribe((data: MockData) => {
      const user = this.pickRandomUser(data);
      this._user.set(user);
    });
  }

  private pickRandomUser(data: MockData): User | null {
    const users = data.data?.users;
    if (!users || users.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex] ?? null;
  }

  clearUser() {
    this._user.set(null);
  }
}