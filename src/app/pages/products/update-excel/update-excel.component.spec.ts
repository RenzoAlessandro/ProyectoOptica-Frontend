import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExcelComponent } from './update-excel.component';

describe('UpdateExcelComponent', () => {
  let component: UpdateExcelComponent;
  let fixture: ComponentFixture<UpdateExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
