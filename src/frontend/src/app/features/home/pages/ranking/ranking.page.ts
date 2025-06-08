import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdviserComponent } from '@shared/components/adviser/adviser.component';

@Component({
  selector: 'app-ranking',
  imports: [CommonModule, AdviserComponent],
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.css'],
})
export class RankingPage {
  participants = [
    { name: 'Demo', points: 1200 },
    { name: 'Demo', points: 1100 },
    { name: 'Demo', points: 1050 },
    { name: 'Demo', points: 1000 },
  ];
}
