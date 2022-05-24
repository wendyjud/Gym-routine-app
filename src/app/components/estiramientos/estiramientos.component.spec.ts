import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiramientosComponent } from './estiramientos.component';

describe('EstiramientosComponent', () => {
  let component: EstiramientosComponent;
  let fixture: ComponentFixture<EstiramientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstiramientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstiramientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
