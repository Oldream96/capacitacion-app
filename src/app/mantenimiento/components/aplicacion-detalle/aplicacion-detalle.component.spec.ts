import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionDetalleComponent } from './aplicacion-detalle.component';

describe('AplicacionDetalleComponent', () => {
  let component: AplicacionDetalleComponent;
  let fixture: ComponentFixture<AplicacionDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
