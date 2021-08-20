import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditoria-filtros',
  templateUrl: './auditoria-filtros.component.html',
  styleUrls: ['./auditoria-filtros.component.scss']
})
export class AuditoriaFiltrosComponent implements OnInit {
  fechaInicio: Date;
  fechaFin: Date;
  hora = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
