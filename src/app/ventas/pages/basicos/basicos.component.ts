import { Component } from '@angular/core';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower : string ='esteban';
  nombreUpper : string ='ESTEBAN';
  nombreCompleto : string ='eStEbAn EdUaRdO lEpE cAsTrO';

  fecha: Date = new Date(); // el día de hoy
  

}
