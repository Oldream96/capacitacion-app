import { Component, Input, OnInit } from '@angular/core';
import { PerfilResponse } from '../../models/perfil.model';

@Component({
  selector: 'app-perfil-detalle',
  templateUrl: './perfil-detalle.component.html',
  styleUrls: ['./perfil-detalle.component.scss']
})
export class PerfilDetalleComponent implements OnInit {
  @Input() perfilUsuario: PerfilResponse = new PerfilResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
