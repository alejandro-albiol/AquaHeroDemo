import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHeatComponent } from '../map/components/map-heat/map-heat.component';

describe('MapHeatComponent', () => {
  let component: MapHeatComponent;
  let fixture: ComponentFixture<MapHeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapHeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapHeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
