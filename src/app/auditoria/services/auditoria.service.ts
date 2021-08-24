import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { errorListaRequest, ErrorLogList } from '../models/error.model';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {

  Auditoria_api = environment.AUDITORIA_API;

  constructor(private http: HttpClient) { }

  obtenerErrores(errorListaRequest: errorListaRequest): Observable<ErrorLogList> {
    let params = new HttpParams();
    Object.keys(errorListaRequest).forEach(key => {
      if (errorListaRequest[key] && errorListaRequest[key] != null) {
        params = params.append(key, errorListaRequest[key]);
        
      }
    });
    const urlUser = `${this.Auditoria_api}listar`;
    return this.http.get<ErrorLogList>(urlUser, { params:params,observe:'body',responseType:'json' });
  }
}
