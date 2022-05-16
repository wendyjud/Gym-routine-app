import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinturaComponent } from './cintura.component';

describe('CinturaComponent', () => {
  let component: CinturaComponent;
  let fixture: ComponentFixture<CinturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
