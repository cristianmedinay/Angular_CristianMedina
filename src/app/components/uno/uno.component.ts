import { JuegosInterfaz } from './../../utils/Juegos';
import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { PlataformaInterfaz } from '../../utils/Plataformas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  filtro:JuegosInterfaz[]=[];
  filtro2:PlataformaInterfaz[]=[];
  nom:string="";
  constructor(private ruta:Router,private juegos:JuegosService) { 

  }

  ngOnInit(): void {

    this.filtro2 = this.juegos.getTodos();

  }

  funciona(nombre:string){
      //if(nombre=='PS'){
      //  =filtradoJuego(nombre);
      //} 
      this.filtro= this.juegos.filtradoJuego(nombre);
      this.juegos.setJuegos(this.filtro);
      
  }

}
