import { Component } from '@angular/core';


//Probando cambios en branch
//prueba de branch 2

//probando rama features
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
  }
}
