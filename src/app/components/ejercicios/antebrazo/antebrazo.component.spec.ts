import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntebrazoComponent } from './antebrazo.component';

describe('AntebrazoComponent', () => {
  let component: AntebrazoComponent;
  let fixture: ComponentFixture<AntebrazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntebrazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntebrazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
