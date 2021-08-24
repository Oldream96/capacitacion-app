import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = environment.token;
    req = req.clone({
      setHeaders: {
        Authorization: localStorage.getItem('auth_token') == null ? '': localStorage.getItem('auth_token'),
        'Content-Type': 'application/json',
      }
    });

    return next.handle(req);
  }
}
