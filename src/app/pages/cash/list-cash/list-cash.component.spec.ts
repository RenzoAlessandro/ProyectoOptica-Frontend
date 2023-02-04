import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCashComponent } from './list-cash.component';

describe('ListCashComponent', () => {
  let component: ListCashComponent;
  let fixture: ComponentFixture<ListCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
