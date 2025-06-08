import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MapHeatComponent } from './components/map-heat/map-heat.component';
import { AdviserComponent } from '@shared/components/adviser/adviser.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MapHeatComponent, AdviserComponent],
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
    this.http
      .get('/assets/sections/cp_hoods.geojson')
      .subscribe((res) => {
        this.geo = res;
      });
  }
}
