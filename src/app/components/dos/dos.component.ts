import { Component, OnInit } from '@angular/core';
import { JuegosInterfaz } from '../../utils/Juegos';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {
  numero:number=0;
  contador :number = this.juegos.juegosfiltrado.length;
  lista:string[]=["PS","PC","XBOX"];
  filtro:JuegosInterfaz[]=[];
  filtrado:JuegosInterfaz[]=[];

  //filtro2:PlataformaInterfaz[]=[];
  selectedValue:string=""
  constructor(public juegos:JuegosService) {
  //this.filtrado =juegos.getJuegos();
   }

  ngOnInit(): void {
    //this.filtro2 = this.juegos.getTodos();

  }
  cambioInput(param:string){
    this.filtro= this.juegos.filtradoJuego(param);
    this.juegos.setJuegos(this.filtro);
    //console.log(param);
  }


}
