import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPage } from '../ranking/ranking.page';

describe('DashboardComponent', () => {
  let component: RankingPage;
  let fixture: ComponentFixture<RankingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
