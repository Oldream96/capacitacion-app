import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioMantComponent } from './usuario-mant.component';

describe('UsuarioMantComponent', () => {
  let component: UsuarioMantComponent;
  let fixture: ComponentFixture<UsuarioMantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioMantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
