import { Component, Input, OnInit } from '@angular/core';
import { UsuarioResponse } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent implements OnInit {

  @Input() listaUsuarios: UsuarioResponse[];
  constructor() { }

  ngOnInit(): void {
  }

}
