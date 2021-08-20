import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioRequest } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-mant',
  templateUrl: './usuario-mant.component.html',
  styleUrls: ['./usuario-mant.component.scss']
})
export class UsuarioMantComponent implements OnInit {

  @Output() enviarUsuarioEvent: EventEmitter<UsuarioRequest> = new EventEmitter<UsuarioRequest>();
  public myForm: FormGroup;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    console.log('init');
    this.initForm()
  }

  initForm() {
    this.myForm = this.fb.group({
      nombre: [null, Validators.required],
      login: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
      esdominio: [null],
      escontraseña: [null],
      esestado: [null],
    });
  }

  enviarUsuario() {
    //this.enviarUsuarioEvent.emit({ id: 1, name: 'nombre', edad: '23' });
  }

  onSubmit() {
    console.log(this.myForm);
    if (this.myForm.valid) {
      var usuaroRequest = new UsuarioRequest();
      usuaroRequest.idPersona = 1;
      usuaroRequest.nombre = this.myForm.controls.nombre.value;
      usuaroRequest.login = this.myForm.controls.login.value;
      usuaroRequest.email = this.myForm.controls.email.value;
      usuaroRequest.clave = this.myForm.controls.password.value;
      usuaroRequest.cambioContrasenia = this.myForm.controls.escontraseña.value == null ? false : this.myForm.controls.escontraseña.value ;
      usuaroRequest.estado = { id: 1 };
      console.log(usuaroRequest);
      this.enviarUsuarioEvent.emit( usuaroRequest );
    }
  }

  onRestart() {
    this.myForm.reset();
    // this.myForm.setValue({
    //   nombre: [null],
    //   login: [null],
    //   email: [null],
    //   password: [null],
    //   esdominio: [null],
    //   escontraseña: [null],
    //   esestado: [null],
    // });
  }

}
