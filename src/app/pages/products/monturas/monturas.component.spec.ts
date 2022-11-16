import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonturasComponent } from './monturas.component';

describe('MonturasComponent', () => {
  let component: MonturasComponent;
  let fixture: ComponentFixture<MonturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
