import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiernaYGlueteoComponent } from './pierna-y-glueteo.component';

describe('PiernaYGlueteoComponent', () => {
  let component: PiernaYGlueteoComponent;
  let fixture: ComponentFixture<PiernaYGlueteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiernaYGlueteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiernaYGlueteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
