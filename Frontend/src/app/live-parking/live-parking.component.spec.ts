import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveParkingComponent } from './live-parking.component';

describe('LiveParkingComponent', () => {
  let component: LiveParkingComponent;
  let fixture: ComponentFixture<LiveParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
