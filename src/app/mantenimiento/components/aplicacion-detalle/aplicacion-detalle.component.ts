import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplicacion-detalle',
  templateUrl: './aplicacion-detalle.component.html',
  styleUrls: ['./aplicacion-detalle.component.scss']
})
export class AplicacionDetalleComponent implements OnInit {
  @Input() idAplicacionAsignada: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.idAplicacionAsignada);
  }

}
