import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { 
    console.log(this.route.snapshot.paramMap.get('id'));
    
  }

  ngOnInit(): void {
  }

}
