import { Injectable } from '@angular/core';
import { Linea } from '../models/linea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineaService {

  list: Linea[] =[
  {
    "nombre": "Linea Roja",
    "id": 1,
    "descripcion": "Recorrerá desde la Estación hasta la Facultad de Agronomía de la Universidad Mayor de San Simón en la avenida Petrolera. Tendrá una longitud aproximada de 5.5 kilómetros y siete nuevas estaciones a parte de la Central.",
    "vagones": [
      {
        "id": 0,
        "numero": 1,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 2,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 3,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 4,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 5,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 6,
        "cantidad": 220,
        "checked": true
      }
    ],
    "paradas": [
      {
        "id": 0,
        "origen": "estacion san antonio",
        "destino": "vidriolux",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "6 de agosto",
        "destino": "politecnico",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "el arco Km 0",
        "destino": "facultad de agronomia",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "politecnico",
        "destino": "sentro de salud Vinto Chico",
        "tiempo": 5
      },
      {
        "id": 0,
        "origen": "alto moirador",
        "destino": "Sipe Sipe",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "6 de agosto",
        "destino": "Cotapachi",
        "tiempo": 4
      }
    ]
  },
  {
    "nombre": "Linea Amarilla",
    "id": 2,
    "descripcion": "Tendrá un tramo de 10 kilómetros, recorrerá entre San Antonio y la zona de El Castillo del municipio de Sacaba. Se calcula un recorrido de 25 minutos aproximadamente para esta ruta.  Contará con ocho estaciones, que estarán en los siguientes sectores: Cementerio General, aeropuerto, pasará por la avenida Ayacucho, la Empresa de Luz y Fuerza Cochabamba (ELFEC), puente de Quillacollo, Parque de la Familia, plazuela de las Banderas, plazuela Cobija, estadio Félix Capriles, Recoleta, Muyurina y el Castillo.",
    "vagones": [
      {
        "id": 0,
        "numero": 1,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 2,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 3,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 4,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 5,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 6,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 7,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 8,
        "cantidad": 220,
        "checked": true
      }
    ],
    "paradas": [
      {
        "id": 0,
        "origen": "Av Aroma",
        "destino": "Zona Paraiso",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "Recoleta",
        "destino": "Sedcam-ACB",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "Parque de la familia",
        "destino": "Usip",
        "tiempo": 4
      },
      {
        "id": 0,
        "origen": "Muyurina",
        "destino": "ELFEC",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "plaza Cobija",
        "destino": "Estadio Felix Capriles",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "Huayna Kapac",
        "destino": "Villa Coronilla",
        "tiempo": 2
      },
      {
        "id": 0,
        "origen": "Escuela Militar",
        "destino": "Aeropuerto",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "Plaza Cobija",
        "destino": "Muyurina",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "Estadio Felix Cpriles",
        "destino": "San Antonio",
        "tiempo": 3
      }
    ]
  },
  {
    "nombre": "Linea Verde",
    "id": 3,
    "descripcion": "La longitud de este tramo es la más larga, se calcula una distancia de 27 kilómetros aproximadamente desde la estación Central hasta el término municipal de Suticollo. Atraviesa los municipios de Cochabamba, Colcapirhua, Quillacollo, Vinto y Sipe Sipe . Incluye 23 nuevas estaciones.",
    "vagones": [
      {
        "id": 0,
        "numero": 1,
        "cantidad": 3,
        "checked": true
      },
      {
        "id": 0,
        "numero": 2,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 3,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 4,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 5,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 6,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 7,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 8,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 9,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 10,
        "cantidad": 220,
        "checked": true
      },
      {
        "id": 0,
        "numero": 8,
        "cantidad": 220,
        "checked": true
      }
    ],
    "paradas": [
      {
        "id": 0,
        "origen": "Suticollo",
        "destino": "Parada Cementerio Cercado",
        "tiempo": 5
      },
      {
        "id": 0,
        "origen": "Parada Aroma",
        "destino": "Quillacollo",
        "tiempo": 5
      },
      {
        "id": 0,
        "origen": "parada Aeropuerto",
        "destino": "Suticollo",
        "tiempo": 4
      },
      {
        "id": 0,
        "origen": "Parque Mariscal Santa Cruz",
        "destino": "Aduana Nacional",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "Colcapirua",
        "destino": "Piñani",
        "tiempo": 3
      },
      {
        "id": 0,
        "origen": "terminal de buses Quillacollo",
        "destino": "Fabrica manaco",
        "tiempo": 4
      },
      {
        "id": 0,
        "origen": "vinto",
        "destino": "alto mirador",
        "tiempo": 3
      }
    ]
  }
]
  counter: number = 4;
  constructor() { }

  getAll(): Observable<Linea[]> {
    return Observable.create(
      (observer) => {
        setTimeout(() => {
          observer.next(this.list);
          observer.complete();
        }, 500);

      }
    );
  }

  getById(id: number): Observable<Linea> {
    let linea: Linea = this.list.find((linea) => {
      return linea.id === id;
    });
    return Observable.create(
      (observer) => {
        setTimeout(() => {
          observer.next(linea);
          observer.complete();
        }, 500);

      }
    );
  }

  create(lineaToCreate: Linea): Observable<Linea> {
    lineaToCreate.id = this.counter;
    lineaToCreate.paradas = [];
    lineaToCreate.vagones = [];
    this.counter++;
    return Observable.create(
      (observer) => {
        setTimeout(() => {
          this.list.push(lineaToCreate);
          observer.next(lineaToCreate);
          observer.complete();
        }, 500);

      }
    );
  }

  updateById(id: number, lineaToUpdate: Linea): Observable<Linea> {
    return null;
  }

  deleteById(id: number): Observable<Linea> {
    return null;
  }
}
