import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PectoralesComponent } from './pectorales.component';

describe('PectoralesComponent', () => {
  let component: PectoralesComponent;
  let fixture: ComponentFixture<PectoralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PectoralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PectoralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
