import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';
import { JuegosInterfaz } from 'src/app/utils/Juegos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista:string[]=["PS","PC","XBOX"];
  filtro:JuegosInterfaz[]=[];

  constructor(private ruta:Router,public juegos:JuegosService) { 

  }

  ngOnInit(): void {
  }


  pasardato(valor:string,rutas:string){
    this.ruta.navigate([rutas,valor])
    this.filtro= this.juegos.filtradoJuego(valor);
    this.juegos.setJuegos(this.filtro);
  }

}
