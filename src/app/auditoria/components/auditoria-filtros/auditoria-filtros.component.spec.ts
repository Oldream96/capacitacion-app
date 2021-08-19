import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaFiltrosComponent } from './auditoria-filtros.component';

describe('AuditoriaFiltrosComponent', () => {
  let component: AuditoriaFiltrosComponent;
  let fixture: ComponentFixture<AuditoriaFiltrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaFiltrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
