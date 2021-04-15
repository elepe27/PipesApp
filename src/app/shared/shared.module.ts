import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';




@NgModule({
  declarations: [
    MenuComponent
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule // importamos el modulo con todo lo encapsulado en el PrimeNg module
  ]
})
export class SharedModule { }
