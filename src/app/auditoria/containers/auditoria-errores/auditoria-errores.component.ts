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
  constructor(
    private serviceAuditoria: AuditoriaService
  ) { }

  ngOnInit(): void {
  }

  enviarBuscar(request: errorListaRequest){
    console.log(request);
    this.erroresPaginate(request);
  }

  erroresPaginate(request: errorListaRequest){
    this.errorRequest = {
      ...request,
    };
    console.log(this.errorRequest);
    if(!this.errorRequest.fechainicio || !this.errorRequest.fechafin) return;
    this.serviceAuditoria.obtenerErrores(this.errorRequest).subscribe(data=>{
      console.log(data.logs);
      this.errorLogs = data.logs;
    })
    
  }

}
