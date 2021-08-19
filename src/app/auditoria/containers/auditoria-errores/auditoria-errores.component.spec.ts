import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaErroresComponent } from './auditoria-errores.component';

describe('AuditoriaErroresComponent', () => {
  let component: AuditoriaErroresComponent;
  let fixture: ComponentFixture<AuditoriaErroresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaErroresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaErroresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
