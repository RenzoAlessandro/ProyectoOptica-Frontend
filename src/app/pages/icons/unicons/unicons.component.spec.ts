import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniconsComponent } from './unicons.component';

describe('UniconsComponent', () => {
  let component: UniconsComponent;
  let fixture: ComponentFixture<UniconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
