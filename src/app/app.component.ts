import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'esteban lepe'
  valor: number = 15234;
  obj = {
    nombre : 'esTeban eDuaRdo lEpE CaStRo'
  }
  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }
}
