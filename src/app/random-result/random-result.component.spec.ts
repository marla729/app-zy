import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomResultComponent } from './random-result.component';

describe('RandomResultComponent', () => {
  let component: RandomResultComponent;
  let fixture: ComponentFixture<RandomResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
