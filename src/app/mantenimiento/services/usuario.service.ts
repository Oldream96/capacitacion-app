import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioResponse, UsuarioResponseList } from '../models/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  Usuario_api = environment.USUARIO_API;
  token = environment.token;
  private header = new HttpHeaders({
    Authorization: this.token,
  });

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<UsuarioResponseList> {
    const urlUser = `${this.Usuario_api}/todos`;
    return this.http.get<UsuarioResponseList>(urlUser,{
      headers: this.header,
    });
  }
}
