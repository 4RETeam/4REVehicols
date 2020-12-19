import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRangeSliderComponent } from './single-range-slider.component';

describe('SingleRangeSliderComponent', () => {
  let component: SingleRangeSliderComponent;
  let fixture: ComponentFixture<SingleRangeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRangeSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
