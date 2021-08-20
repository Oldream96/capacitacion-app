import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-mant',
  templateUrl: './usuario-mant.component.html',
  styleUrls: ['./usuario-mant.component.scss']
})
export class UsuarioMantComponent implements OnInit {

  @Output() enviarUsuarioEvent: EventEmitter<any> = new EventEmitter<any>();
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
    this.enviarUsuarioEvent.emit({ id: 1, name: 'nombre', edad: '23' });
  }

  onSubmit() {
    console.log(this.myForm);
    console.log(this.myForm.value);
    console.log(this.myForm.controls.email.value);
    if (this.myForm.valid) {
      console.log('Formulario válido enviar a backend');
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
