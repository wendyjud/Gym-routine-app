import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemagrasaComponent } from './quemagrasa.component';

describe('QuemagrasaComponent', () => {
  let component: QuemagrasaComponent;
  let fixture: ComponentFixture<QuemagrasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuemagrasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuemagrasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
