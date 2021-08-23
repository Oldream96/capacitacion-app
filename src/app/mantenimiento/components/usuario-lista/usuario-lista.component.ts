import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioResponse } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent implements OnInit {

  @Input() listaUsuarios: UsuarioResponse[];
  @Output() enviarUsuarioIdEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  editarUsuario(idUsuario:number){
    this.enviarUsuarioIdEvent.emit(idUsuario);
  }

}
