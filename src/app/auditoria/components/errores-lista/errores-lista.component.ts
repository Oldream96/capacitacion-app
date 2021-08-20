import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errores-lista',
  templateUrl: './errores-lista.component.html',
  styleUrls: ['./errores-lista.component.scss']
})
export class ErroresListaComponent implements OnInit {
  listaErrores:any[];

  constructor() { }

  ngOnInit(): void {
  }

}
