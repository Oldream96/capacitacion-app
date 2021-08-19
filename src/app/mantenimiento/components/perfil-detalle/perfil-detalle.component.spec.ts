import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDetalleComponent } from './perfil-detalle.component';

describe('PerfilDetalleComponent', () => {
  let component: PerfilDetalleComponent;
  let fixture: ComponentFixture<PerfilDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
