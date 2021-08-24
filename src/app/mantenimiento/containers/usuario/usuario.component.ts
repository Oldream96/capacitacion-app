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
  usuarioEdit: UsuarioResponse;
  totalRecords = 0;

  constructor(
    private servicioUsuario: UsuarioService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.listarUsuarios();

  }

  listarUsuarios(){
    this.servicioUsuario.obtenerUsuarios().subscribe(data=>{
      this.listaUsuarios = data.usuarios;
      this.totalRecords = data.paginacion.totalregistros;
      
    },error=>{
      this.messageService.add({severity:'error', summary: 'Error al Obtener Usuarios', detail:error.error.error.mensaje});
    })
  }

  mostrarFormulario(){
    this.mostrarUsuario = !this.mostrarUsuario;
  }

  enviarUsuario(usuario: UsuarioRequest ){
    if(!this.usuarioEdit){
      this.crearUsuario(usuario);
    }else{
      this.editarUsuario(usuario);
    }

  }

  crearUsuario(usuario: UsuarioRequest){
    this.servicioUsuario.crearUsuario(usuario).subscribe(data=>{
      if(data){
        this.messageService.add({severity:'success', summary: 'Usuario Agregado', detail: 'Usuario Agregado Exitosamente'});
        this.mostrarUsuario = false;
        this.listarUsuarios();
      }
    },error=>{
      this.messageService.add({severity:'error', summary: 'Error al Insertar', detail:'Error al Insertar Usuario: ' + error.error.error.mensaje });
    });
  }

  editarUsuario(usuario: UsuarioRequest){
    this.servicioUsuario.editarUsuario(this.usuarioEdit.id,usuario).subscribe(data=>{
      this.messageService.add({severity:'success', summary: 'Usuario Editado', detail: 'Usuario Editado Exitosamente'});
      this.mostrarUsuario = false;
      this.listarUsuarios();
    },error=>{
      this.messageService.add({severity:'error', summary: 'Error al Editar', detail:'Error al Editar Usuario: ' + error.error.error.mensaje });
    });
  }

  obtenerUsuarioId(idUsuario: number){
    this.mostrarUsuario= false;
    this.servicioUsuario.obtenerUsuarioPorId(idUsuario).subscribe(data=>{
      this.usuarioEdit = data;
      this.mostrarUsuario = true;
    });
  }

  obtener(){
    
  }

}
