import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/mantenimiento/services/usuario.service';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.scss']
})
export class AutenticacionComponent implements OnInit {

  constructor(
    private servicioUsuario: UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  obtenerKey(){
    this.servicioUsuario.obtenerKey().subscribe(
      (data: HttpResponse<any>) => {
        localStorage.setItem('auth_token', data.headers.get('authorization'));
        this.router.navigate(['usuario']);
      });
  }

}
