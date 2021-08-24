import { Component, OnInit } from '@angular/core';
import { errorListaRequest } from '../../models/error.model';
import { AuditoriaService } from '../../services/auditoria.service';

@Component({
  selector: 'app-auditoria-errores',
  templateUrl: './auditoria-errores.component.html',
  styleUrls: ['./auditoria-errores.component.scss']
})
export class AuditoriaErroresComponent implements OnInit {
  errorRequest: errorListaRequest;
  constructor(
    private serviceAuditoria: AuditoriaService
  ) { }

  ngOnInit(): void {
  }

  erroresPaginate(request: errorListaRequest){
    this.errorRequest = {
      ...request,
    };
    var fecha = "";
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if(month < 10){
      fecha =`${day}/0${month}/${year}`
    }else{
      fecha = `${day}/${month}/${year}`
    }
    this.errorRequest.fechainicio = fecha.toString();
    this.errorRequest.fechafin = fecha.toString();
    this.serviceAuditoria.obtenerErrores(this.errorRequest).subscribe(data=>{
      console.log(data);
    })
    
  }

}
