import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunasComponent } from './lunas.component';

describe('LunasComponent', () => {
  let component: LunasComponent;
  let fixture: ComponentFixture<LunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
