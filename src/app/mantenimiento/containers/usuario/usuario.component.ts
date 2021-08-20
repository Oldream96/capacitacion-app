import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng-lts/api';
import { UsuarioRequest, UsuarioResponse } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  providers: [MessageService]
})
export class UsuarioComponent implements OnInit {
  listaUsuarios: UsuarioResponse[] = [];
  mostrarUsuario=false;

  constructor(
    private servicioUsuario: UsuarioService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.servicioUsuario.obtenerUsuarios().subscribe(data=>{
      this.listaUsuarios = data.usuarios;
      console.log(data);
      
    },error=>{
      console.log(error.error.error);
      this.messageService.add({severity:'error', summary: 'Error al Obtener Usuarios', detail:error.error.error.mensaje});
    })
  }

  mostrarFormulario(){
    this.mostrarUsuario = !this.mostrarUsuario;
  }

  enviarUsuario(usuario: UsuarioRequest ){
    this.servicioUsuario.crearUsuario(usuario).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error);
      this.messageService.add({severity:'error', summary: 'Error al Insertar', detail:'Validation failed'});
    });
  }

}
