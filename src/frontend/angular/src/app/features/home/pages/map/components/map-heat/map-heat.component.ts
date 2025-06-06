import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import maplibregl, {
} from 'maplibre-gl';

@Component({
  selector: 'app-map-heat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-heat.component.html',
  styleUrls: ['./map-heat.component.css'],
})
export class MapHeatComponent implements AfterViewInit {
  @Input() geoJsonData!: any;
  @Input() consumptionData!: Record<string, number>;

  map!: maplibregl.Map;
  ranges = [
    { min: 0, max: 100, color: '#fee5d9' },
    { min: 100, max: 500, color: '#fcae91' },
    { min: 500, max: 1000, color: '#fb6a4a' },
    { min: 1000, max: 5000, color: '#de2d26' },
    { min: 5000, max: Infinity, color: '#a50f15' },
  ];

  ngAfterViewInit(): void {
    this.assignRandomColors();
    this.initMap();
  }

  private initMap() {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [-3.7038, 40.4168],
      zoom: 5,
    });

    this.map.on('load', () => {
      this.map.addSource('regions', {
        type: 'geojson',
        data: this.geoJsonData,
      });

      this.map.addLayer({
        id: 'municipios-layer',
        type: 'fill',
        source: 'regions',
        paint: {
          'fill-color': ['get', 'randomColor'],
          'fill-opacity': 0.5,
          'fill-outline-color': '#222',
        },
      });
    });
  }

  // TODO: hacer que no sea random la asignación de colores

  private assignRandomColors() {
    const colors = this.ranges.map((r) => r.color);
    this.geoJsonData?.features.forEach((feature: any) => {
      feature.properties.randomColor = this.getRandomColor(colors);
    });
  }

  private getRandomColor(colors: string[]): string {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}
