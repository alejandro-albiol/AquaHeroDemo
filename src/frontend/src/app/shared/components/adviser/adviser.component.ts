import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { IAService } from '@core/services/demo/IA.service';
import { IAAdvice } from '@core/services/demo/models/IA.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adviser',
  imports: [AsyncPipe],
  templateUrl: './adviser.component.html',
  styleUrl: './adviser.component.css',
})
export class AdviserComponent {
  data$: Observable<IAAdvice>;

  constructor(private readonly iaService: IAService) {}

  ngOnInit() {
    this.data$ = this.iaService.advice();
  }
}
