import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioRequest, UsuarioResponse, UsuarioResponseList } from '../models/usuario.model';
import { environment } from 'src/environments/environment';
import { PerfilResponse } from '../models/perfil.model';
import { AplicacionResponse } from '../models/aplicacion.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  Usuario_api = environment.USUARIO_API;

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<UsuarioResponseList> {
    const urlUser = `${this.Usuario_api}/usuario/todos`;
    return this.http.get<UsuarioResponseList>(urlUser);
  }

  obtenerUsuarioPorId(idUsuario): Observable<UsuarioResponse> {
    const urlUser = `${this.Usuario_api}/usuario/${idUsuario}`;
    return this.http.get<UsuarioResponse>(urlUser);
  }


  obtenerPerfil(idPerfil: number): Observable<PerfilResponse>{
    const urlPerfil = `${this.Usuario_api}/perfil/${idPerfil}`;
    return this.http.get<PerfilResponse>(urlPerfil);
  }

  obtenerAplicacion(idAplicacion: number): Observable<AplicacionResponse>{
    const urlAplicacion = `${this.Usuario_api}/aplicacion/${idAplicacion}`;
    return this.http.get<AplicacionResponse>(urlAplicacion);
  }

  crearUsuario( usuarioRequest:UsuarioRequest ):Observable<UsuarioRequest>{
    const urlUser = `${this.Usuario_api}/usuario/nuevo`;
    return this.http.post<UsuarioRequest>(urlUser,usuarioRequest);
  }

  editarUsuario(idUsuario: number,usuarioRequest:UsuarioRequest ):Observable<UsuarioRequest>{
    const urlEditUser = `${this.Usuario_api}/usuario/${idUsuario}`;
    return this.http.put<UsuarioRequest>(urlEditUser,usuarioRequest);
  }

  obtenerKey(){
    var url ='http://10.240.30.222/rest-v2/autenticacion/api/v1/autenticacion'
    var header = new HttpHeaders({
      'X-Appkey': 'ZGlzdHJpbHV6X3BsYXRhZm9ybWFfc2VndXJpZGFkX3dlYg==',
      'X-AppCode': 'AC98E15D-8665-4AD6-8614-E134E46563C6',
      'User-Agent-Browser':'Chrome',
      'User-Agent-Hostname':'Mi PC',
      'User-Agent-BrowserVersion': '89',
    });
    return this.http.post<any>(url,{ "login" : "admin", "clave" : "@dministr4dOr" },{
      headers: header,
      observe:'response'
    });
  }
}
