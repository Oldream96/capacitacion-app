import { Component, OnInit } from '@angular/core';
import { errorListaRequest, ErrorLog } from '../../models/error.model';
import { AuditoriaService } from '../../services/auditoria.service';

@Component({
  selector: 'app-auditoria-errores',
  templateUrl: './auditoria-errores.component.html',
  styleUrls: ['./auditoria-errores.component.scss']
})
export class AuditoriaErroresComponent implements OnInit {

  errorRequest: errorListaRequest;
  errorLogs: ErrorLog[] = [];
  fechaInicio: string;
  fechaFin: string;
  totalRecords = 0;
  loading: boolean = false;
  constructor(
    private serviceAuditoria: AuditoriaService
  ) { }

  ngOnInit(): void {
  }

  enviarBuscar(request: errorListaRequest){
    this.fechaInicio = request.fechainicio;
    this.fechaFin = request.fechafin;
    this.erroresPaginate(request);
  }

  erroresPaginate(request: errorListaRequest){
    this.errorRequest = {
      ...request,
    };
    this.errorRequest.fechafin = this.fechaFin;
    this.errorRequest.fechainicio = this.fechaInicio;
    this.errorRequest.numeropagina = this.errorRequest.numeropagina != 1 ? this.errorRequest.numeropagina/10 +1 : this.errorRequest.numeropagina;
    if(!this.fechaInicio || !this.fechaFin) return;
    this.loading = true;
    this.serviceAuditoria.obtenerErrores(this.errorRequest).subscribe(data=>{
      this.errorLogs = data.logs;
      this.loading = false;
      this.totalRecords = data.paginacion.totalregistros;
    })
    
  }

}
