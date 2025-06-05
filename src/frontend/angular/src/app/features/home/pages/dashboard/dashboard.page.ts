import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
})
export class DashboardPage {
  participants = [
    { name: 'Demo', points: 1200 },
    { name: 'Demo', points: 1100 },
    { name: 'Demo', points: 1050 },
    { name: 'Demo', points: 1000 },
    { name: 'Demo', points: 1200 },
    { name: 'Demo', points: 1100 },
    { name: 'Demo', points: 1050 },
    { name: 'Demo', points: 1000 },
  ];
}
