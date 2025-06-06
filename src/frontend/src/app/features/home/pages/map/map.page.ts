import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MapHeatComponent } from './components/map-heat/map-heat.component';

@Component({
  selector: 'app-map',
  imports: [MapHeatComponent],
  templateUrl: './map.page.html',
  styleUrl: './map.page.css',
})
export class MapPage {
  geo!: any;
  data: Record<string, number> = {
    AN: 1500,
    CT: 900,
    MD: 2200,
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
}
