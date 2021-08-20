import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilResponse } from '../../models/perfil.model';
import { UsuarioRequest } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  idPerfil: string;
  perfilUsuario: PerfilResponse = new PerfilResponse();

  constructor(
    private route: ActivatedRoute,
    private servicioPerfil: UsuarioService,
  ) { 
    this.idPerfil = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.servicioPerfil.obtenerPerfil(Number(this.idPerfil)).subscribe(data=>{
      this.perfilUsuario = data;
    });
  }


}
