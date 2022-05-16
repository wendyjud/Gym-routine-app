import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioEnCasaComponent } from './cardio-en-casa.component';

describe('CardioEnCasaComponent', () => {
  let component: CardioEnCasaComponent;
  let fixture: ComponentFixture<CardioEnCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardioEnCasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioEnCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
