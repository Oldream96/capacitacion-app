import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioRequest, UsuarioResponse } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-mant',
  templateUrl: './usuario-mant.component.html',
  styleUrls: ['./usuario-mant.component.scss']
})
export class UsuarioMantComponent implements OnInit {

  @Output() enviarUsuarioEvent: EventEmitter<UsuarioRequest> = new EventEmitter<UsuarioRequest>();
  @Input() usuarioEdit: UsuarioResponse;

  public myForm: FormGroup;
  textSubmit: string = 'Registrar';

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.myForm = this.fb.group({
      nombre: [null, Validators.required],
      login: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
      esdominio: [null],
      escontraseña: [null],
      esestado: [null],
    });
    if(this.usuarioEdit){
      this.textSubmit = "Editar";
      this.llenarUsuarioEdit()
    }
  }

  llenarUsuarioEdit(){
    this.myForm.reset();
    this.myForm.setValue({
      nombre: this.usuarioEdit.nombre,
      login: this.usuarioEdit.login,
      email: this.usuarioEdit.email,
      password: this.usuarioEdit.clave,
      esdominio: this.usuarioEdit.esAd,
      escontraseña: false,
      esestado: this.usuarioEdit.estado.id == 1 ? true: false,
    });
    this.myForm.controls.login.disable();
  }

  enviarUsuario() {
    //this.enviarUsuarioEvent.emit({ id: 1, name: 'nombre', edad: '23' });
  }

  onSubmit() {
    if (this.myForm.valid) {
      //if(!this.usuarioEdit){
        var usuaroRequest = new UsuarioRequest();
        usuaroRequest.nombre = this.myForm.controls.nombre.value;
        usuaroRequest.login = this.myForm.controls.login.value;
        usuaroRequest.email = this.myForm.controls.email.value;
        usuaroRequest.clave = this.myForm.controls.password.value;
        usuaroRequest.cambioContrasenia = this.myForm.controls.escontraseña.value == null ? false : this.myForm.controls.escontraseña.value ;
        usuaroRequest.estado = { id: this.myForm.controls.esestado.value === true ? 1: 0 };
        usuaroRequest.esAd = 1;
        this.enviarUsuarioEvent.emit( usuaroRequest );
      // }else{
      //   this.usuarioEdit.nombre = this.myForm.controls.nombre.value;
      //   this.usuarioEdit.login = this.myForm.controls.login.value;
      //   this.usuarioEdit.email = this.myForm.controls.email.value;
      //   this.usuarioEdit.clave = this.myForm.controls.password.value;
      //   this.usuarioEdit.estado = { ...this.usuarioEdit.estado ,id: this.myForm.controls.esestado.value === true ? 1: 0 };
      //   this.usuarioEdit.esAd = 1;
      // }
    }
  }

  onRestart() {
    this.myForm.reset();
  }

}
