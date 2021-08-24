import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng-lts/api';
import { errorListaRequest, ErrorLog } from '../../models/error.model';

@Component({
  selector: 'app-errores-lista',
  templateUrl: './errores-lista.component.html',
  styleUrls: ['./errores-lista.component.scss']
})
export class ErroresListaComponent implements OnInit {
  @Input() errorLogs: ErrorLog[] ;
  @Input() totalRecords: number;
  @Input() loading: boolean;

  constructor() { }

  @Output()
  tableEvent: EventEmitter<errorListaRequest> = new EventEmitter();

  ngOnInit(): void {
  }

  loadLazyErrores(event: LazyLoadEvent) {
    const request = new errorListaRequest();
    request.numeropagina = event.first == 0 ? 1 : (event.first) ;
    request.registroporpagina = event.rows;
    this.tableEvent.emit(request);

  }

}
