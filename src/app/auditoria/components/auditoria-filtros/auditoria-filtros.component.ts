import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { errorListaRequest } from '../../models/error.model';

@Component({
  selector: 'app-auditoria-filtros',
  templateUrl: './auditoria-filtros.component.html',
  styleUrls: ['./auditoria-filtros.component.scss']
})
export class AuditoriaFiltrosComponent implements OnInit {

  @Output() enviarBuscar: EventEmitter<errorListaRequest> = new EventEmitter<errorListaRequest>();
  fechaInicio: Date;
  fechaFin: Date;
  constructor() { }

  ngOnInit(): void {
  }

  Buscar(){
    if(!this.fechaFin || !this.fechaInicio ) return;
    var request  = new errorListaRequest();
    request.fechafin = this.dateFormat(this.fechaFin);
    request.fechainicio = this.dateFormat(this.fechaInicio);
    this.enviarBuscar.emit(request);
  }


  dateFormat(fecha): string {
    let date = fecha;

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if(day < 10){
      return(`${month}/0${day}/${year}`);
    }else{
      return(`${month}/${day}/${year}`);
    }
  }

}
