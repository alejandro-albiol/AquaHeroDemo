import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdviserComponent } from '@shared/components/adviser/adviser.component';
import { map, Observable } from 'rxjs';
import { ZoneService } from '@core/services/demo/zone.service';

interface IZones {
  id: string;
  name: string;
  waterLevel: 'Alto' | 'Medio' | 'Bajo';
  restrictions: boolean;
  savingTips: number;
  points: number;
}

@Component({
  selector: 'app-ranking',
  imports: [CommonModule, AdviserComponent],
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.css'],
})
export class RankingPage {
  data$: Observable<IZones[]>;

  constructor(private readonly zoneService: ZoneService) {}

  ngOnInit() {
    this.data$ = this.zoneService.getZones().pipe(
      map((data) =>
        data.zones.map((zone) => ({
          ...zone,
          points: this.randomNumber(),
        })).sort((a, b) => b.points - a.points)
      ),
    );
  }

  randomNumber(): number {
    return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  }
}
