import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssChartComponent } from './css-chart.component';

describe('CssChartComponent', () => {
  let component: CssChartComponent;
  let fixture: ComponentFixture<CssChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssChartComponent]
    });
    fixture = TestBed.createComponent(CssChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
