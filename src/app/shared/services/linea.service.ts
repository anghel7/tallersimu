import { Injectable } from '@angular/core';
import { Linea } from '../models/linea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineaService {

  list: Linea[] = [
    {
      "id": 1,
      "nombre": "Linea Roja",
      "descripcion": "Recorrerá desde la Estación hasta la Facultad de Agronomía de la Universidad Mayor de San Simón en la avenida Petrolera. Tendrá una longitud aproximada de 5.5 kilómetros y siete nuevas estaciones a parte de la Central.",
      "vagones": [
        {
          id: 0,
          numero: 1,
          cantidad: 4,
          checked: true
        },
        {
          id: 0,
          numero: 2,
          cantidad: 100,
          checked: true
        },
        {
          id: 0,
          numero: 3,
          cantidad: 100,
          checked: true
        },
        {
          id: 0,
          numero: 4,
          cantidad: 100,
          checked: true
        },
        {
          id: 0,
          numero: 5,
          cantidad: 90,
          checked: true
        }, {
          id: 0,
          numero: 6,
          cantidad: 90,
          checked: true
        },
      ],
      "paradas": [
        {
          id: 0,
          origen: "Chinata",
          destino: "Villa Obrajes",
          tiempo: 3
        },
        {
          id: 0,
          origen: "Villa Obrajes",
          destino: "Sacaba",
          tiempo: 3
        },
        {
          id: 0,
          origen: "Sacaba",
          destino: "Huayani",
          tiempo: 2
        },
        {
          id: 0,
          origen: "Huayani",
          destino: "Esmeralda",
          tiempo: 3
        },
        {
          id: 0,
          origen: "Esmeralda",
          destino: "Quintanilla",
          tiempo: 2
        },
        {
          id: 0,
          origen: "Quintanilla",
          destino: "Servicio de caminos",
          tiempo: 4
        },
        {
          id: 0,
          origen: "Servicio de caminos",
          destino: "Muyurina",
          tiempo: 2
        }
      ]
    },
    {
      "id": 2,
      "nombre": "Linea Amarilla",
      "descripcion": "Tendrá un tramo de 10 kilómetros, recorrerá entre San Antonio y la zona de El Castillo del municipio de Sacaba. Se calcula un recorrido de 25 minutos aproximadamente para esta ruta.  Contará con ocho estaciones, que estarán en los siguientes sectores: Cementerio General, aeropuerto, pasará por la avenida Ayacucho, la Empresa de Luz y Fuerza Cochabamba (ELFEC), puente de Quillacollo, Parque de la Familia, plazuela de las Banderas, plazuela Cobija, estadio Félix Capriles, Recoleta, Muyurina y el Castillo.",
      "vagones": [],
      "paradas": []
    },
    {
      "id": 3,
      "nombre": "Linea Verde",
      "descripcion": "La longitud de este tramo es la más larga, se calcula una distancia de 27 kilómetros aproximadamente desde la estación Central hasta el término municipal de Suticollo. Atraviesa los municipios de Cochabamba, Colcapirhua, Quillacollo, Vinto y Sipe Sipe . Incluye 23 nuevas estaciones.",
      "vagones": [],
      "paradas": []
    }
  ];
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
