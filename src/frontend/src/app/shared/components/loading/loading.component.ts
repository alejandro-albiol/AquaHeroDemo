import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { LoadingService } from '@core/utils/loading.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  imports: [AsyncPipe],
})
export class LoadingComponent {
  loading$;

  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
  }
}
