import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioResponse, UsuarioResponseList } from '../models/usuario.model';
import { environment } from 'src/environments/environment';
import { PerfilResponse } from '../models/perfil.model';

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

  obtenerPerfil(idPerfil: number): Observable<PerfilResponse>{
    const urlPerfil = `${this.Usuario_api}/perfil/${idPerfil}`;
    return this.http.get<PerfilResponse>(urlPerfil);
  }
}
