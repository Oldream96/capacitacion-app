import { Component } from '@angular/core';
import { MessageService } from 'primeng-lts/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]

})
export class AppComponent {
  title = 'capacitacion-app';
}
