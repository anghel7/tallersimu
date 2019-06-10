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
      "vagones": [],
      "paradas": []
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
    return null;
  }

  create(ineaToCreate: Linea): Observable<Linea> {
    return null;
  }

  updateById(id: number, lineaToUpdate: Linea): Observable<Linea> {
    return null;
  }

  deleteById(id: number): Observable<Linea> {
    return null;
  }
}
