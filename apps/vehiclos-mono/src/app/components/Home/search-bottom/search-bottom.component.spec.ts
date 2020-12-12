import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBottomComponent } from './search-bottom.component';

describe('SearchBottomComponent', () => {
  let component: SearchBottomComponent;
  let fixture: ComponentFixture<SearchBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
