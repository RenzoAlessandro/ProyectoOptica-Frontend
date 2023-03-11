import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedSalesComponent } from './deleted-sales.component';

describe('DeletedSalesComponent', () => {
  let component: DeletedSalesComponent;
  let fixture: ComponentFixture<DeletedSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
