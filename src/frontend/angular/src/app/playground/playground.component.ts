import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@services/demo/dashboard.service';

import { MockData } from '@services/demo/models/dashboard.model';

import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-playground',
  imports: [AsyncPipe, JsonPipe],
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
