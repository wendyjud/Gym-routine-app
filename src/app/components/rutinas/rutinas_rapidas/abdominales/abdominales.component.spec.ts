import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdominalesComponent } from './abdominales.component';

describe('AbdominalesComponent', () => {
  let component: AbdominalesComponent;
  let fixture: ComponentFixture<AbdominalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbdominalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbdominalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
