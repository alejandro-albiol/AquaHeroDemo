import {
  Component,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import maplibregl from 'maplibre-gl';

@Component({
  selector: 'app-map-heat',
  imports: [CommonModule],
  templateUrl: './map-heat.component.html',
  styleUrls: ['./map-heat.component.css'],
})
export class MapHeatComponent implements AfterViewInit, OnChanges {
  @Input() geoJsonData!: any;
  @Input() consumptionData!: Record<string, number>;

  map!: maplibregl.Map;
  popup: maplibregl.Popup;

  ranges = [
    { gasto: 'Bajo', color: '#4FC3F7' },
    { gasto: 'Medio', color: '#26A69A' },
    { gasto: 'Alto', color: '#EF5350' },
  ];

  ngAfterViewInit(): void {
    if (!this.geoJsonData) {
      console.warn('geoJsonData aún no está disponible');
      return;
    }
    this.assignRandom();
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['geoJsonData'] &&
      !changes['geoJsonData'].firstChange &&
      this.geoJsonData
    ) {
      this.assignRandom();
      this.initMap();
    }
  }

  private initMap() {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [-3.7038, 40.4168],
      zoom: 5,
      maxBounds: [
        [-10, 34],
        [5, 45.5],
      ],
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
          'fill-color': [
            'case',
            ['has', 'randomColor'],
            ['get', 'randomColor'],
            '#cccccc',
          ],
          'fill-opacity': 0.5,
          'fill-outline-color': '#222',
        },
      });
    });

    this.popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    this.map.on('click', 'municipios-layer', (e) => {
      const feature = e.features?.[0];
      if (feature) {
        this.popup
          .setLngLat(e.lngLat)
          .setHTML(
            `
            <div style="
              min-width: 100px;
              padding: 8px 10px 8px 8px; 
              font-weight: 700;" 
            >
              <div>${feature.properties['nombre']}</div>
              <div>${feature.properties['gasto']}</div>
            </div>
            `
          )
          .addTo(this.map);
      }
    });

    this.map.on('click', (e) => {
      if (
        !this.map.queryRenderedFeatures(e.point, {
          layers: ['municipios-layer'],
        }).length
      ) {
        this.popup.remove();
      }
    });

    setTimeout(() => {
      this.map.flyTo({
        center: [-0.041325, 39.986355],
        zoom: 13.2,
        speed: 1.2,
        curve: 1.5,
        essential: true,
      });
    }, 2000);
  }

  private assignRandom() {
    this.geoJsonData = structuredClone(this.geoJsonData);
    this.geoJsonData.features.forEach((feature: any) => {
      const randomIndex = Math.floor(Math.random() * this.ranges.length);
      const rango = this.ranges[randomIndex];
      feature.properties.randomColor = rango.color;
      feature.properties.gasto = rango.gasto;
    });
  }
}
