import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellConfComponent } from './sell-conf.component';

describe('SellConfComponent', () => {
  let component: SellConfComponent;
  let fixture: ComponentFixture<SellConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
