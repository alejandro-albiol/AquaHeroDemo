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
export class MapHeatComponent {
  petit: string = "gei";
}
