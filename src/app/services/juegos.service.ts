import { Injectable } from '@angular/core';
import { JuegosInterfaz } from '../utils/Juegos';
import { PlataformaInterfaz } from '../utils/Plataformas';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {


  juegosfiltrado:JuegosInterfaz[]=[];

  juegos:JuegosInterfaz[]=[
    {name: "Grand Theft Auto V",
      platform:"PS",
      background_image: "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg",
      },
        {
        name: "GPortal2",
        platform:"PS",
        background_image: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
      },{
        name: 'The Witcher 3: Wild Hunt',
        platform: "PS",
        background_image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"},
        {name: "TTom Raider",
        platform: "PC",
        background_image: "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"},
         {name: "The Elder Scroll V",
        platform:"PC",
        background_image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"},
        {
             name: "Left 4 Dead 2",
        platform: "XBOX",
        background_image: "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"},
          {name: "Borderlands 2",
        platform: "XBOX",
        background_image: "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
        },
        {
          name: "BioShock Infinite",
          platform:"XBOX",
          background_image: "",
      },
  ];


  plataformas:PlataformaInterfaz[]=[
    {
      siglas: "PS",
      nombre:"Sony PlayStation",
    },
      {siglas: "PC",
        nombre:"Ordenador"
    },
    {
        siglas: "XBOX",
       nombre:"Microsoft XBOX",
    }
 ];

  constructor() { 


  }


  
  getTodos(){
    return this.plataformas;
  }

  setJuegos(juegosfiltrado:JuegosInterfaz[]){
    return this.juegosfiltrado= juegosfiltrado;
  }

  getJuegos(){
    return this.juegosfiltrado;
  }
  filtradoJuego(nombre:string){
    return this.juegos.filter(element => {
      return element.platform==nombre;
   });

  }
}
