import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInputDataComponent } from './customer-input-data.component';

describe('CustomerInputDataComponent', () => {
  let component: CustomerInputDataComponent;
  let fixture: ComponentFixture<CustomerInputDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInputDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
