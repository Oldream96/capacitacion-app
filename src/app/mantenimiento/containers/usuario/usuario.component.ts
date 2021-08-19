import { Component, OnInit } from '@angular/core';
import { UsuarioResponse } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  listaUsuarios: UsuarioResponse[] = [];

  constructor(
    private servicioUsuario: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.servicioUsuario.getAllUser().subscribe(data=>{
      this.listaUsuarios = data.usuarios;
    })
  }

}
