import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInicioComponent } from './popup-inicio.component';

describe('PopupInicioComponent', () => {
  let component: PopupInicioComponent;
  let fixture: ComponentFixture<PopupInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
