import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@core/services/demo/dashboard.service';

import { MockData } from '@core/services/demo/models/dashboard.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-playground',
  imports: [AsyncPipe],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent implements OnInit {
  data$: Observable<MockData>;
  data: MockData;

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit() {
    this.data$ = this.dashboardService.getData();
  }
}
