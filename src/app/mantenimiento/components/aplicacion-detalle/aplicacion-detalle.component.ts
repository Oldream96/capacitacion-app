import { Component, Input, OnInit } from '@angular/core';
import { AplicacionResponse } from '../../models/aplicacion.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-aplicacion-detalle',
  templateUrl: './aplicacion-detalle.component.html',
  styleUrls: ['./aplicacion-detalle.component.scss']
})
export class AplicacionDetalleComponent implements OnInit {

  @Input() idAplicacionAsignada: number = 0;
  Aplicacion: AplicacionResponse = new AplicacionResponse();
  loading = true;

  constructor(
    private servicioAplicacion: UsuarioService,
  ) { }

  ngOnInit(): void { 
    this.servicioAplicacion.obtenerAplicacion(this.idAplicacionAsignada).subscribe(data=>{
      this.Aplicacion = data;
      this.loading = false;
    }); 
  }

}
