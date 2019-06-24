import { Injectable } from '@angular/core';
import { DataLinea } from '../models/data-linea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAll(): Observable<DataLinea[]> {
    return Observable.create(
      (observer) => {
        setTimeout(() => {
          observer.next(DATA);
          observer.complete();
        }, 500);

      }
    );
  }
  getAllI(): DataLinea[] {
    return DATA;
  }
}


const DATA: DataLinea[] = [
  {
    "datameses": [
      {
        "value": 110,
        "time": "Enero"
      },
      {
        "value": 105,
        "time": "Febrero"
      },
      {
        "value": 95,
        "time": "Marzo"
      },
      {
        "value": 100,
        "time": "Abril"
      },
      {
        "value": 85,
        "time": "Mayo"
      },
      {
        "value": 110,
        "time": "Junio"
      },
      {
        "value": 135,
        "time": "Julio"
      },
      {
        "value": 175,
        "time": "Agosto"
      },
      {
        "value": 180,
        "time": "Septiembre"
      },
      {
        "value": 185,
        "time": "Octubre"
      },
      {
        "value": 170,
        "time": "Noviembre"
      },
      {
        "value": 198,
        "time": "Diciembre"
      }
    ],
    "datahoras": [
      {
        "value": 80,
        "time": "06:00"
      },
      {
        "value": 85,
        "time": "06:10"
      },
      {
        "value": 85,
        "time": "06:20"
      },
      {
        "value": 90,
        "time": "06:30"
      },
      {
        "value": 96,
        "time": "06:40"
      },
      {
        "value": 100,
        "time": "06:50"
      },
      {
        "value": 110,
        "time": "07:00"
      },
      {
        "value": 130,
        "time": "07:10"
      },
      {
        "value": 150,
        "time": "07:20"
      },
      {
        "value": 160,
        "time": "07:30"
      },
      {
        "value": 178,
        "time": "07:40"
      },
      {
        "value": 186,
        "time": "07:50"
      },
      {
        "value": 200,
        "time": "08:00"
      },
      {
        "value": 200,
        "time": "08:10"
      },
      {
        "value": 194,
        "time": "08:20"
      },
      {
        "value": 184,
        "time": "08:30"
      },
      {
        "value": 182,
        "time": "08:40"
      },
      {
        "value": 150,
        "time": "08:50"
      },
      {
        "value": 145,
        "time": "09:00"
      },
      {
        "value": 120,
        "time": "09:10"
      },
      {
        "value": 110,
        "time": "09:20"
      },
      {
        "value": 105,
        "time": "09:30"
      },
      {
        "value": 110,
        "time": "09:40"
      },
      {
        "value": 115,
        "time": "09:50"
      },
      {
        "value": 112,
        "time": "10:00"
      },
      {
        "value": 110,
        "time": "10:10"
      },
      {
        "value": 108,
        "time": "10:20"
      },
      {
        "value": 96,
        "time": "10:30"
      },
      {
        "value": 95,
        "time": "10:40"
      },
      {
        "value": 90,
        "time": "10:50"
      },
      {
        "value": 110,
        "time": "11:00"
      },
      {
        "value": 105,
        "time": "11:10"
      },
      {
        "value": 108,
        "time": "11:20"
      },
      {
        "value": 130,
        "time": "11:30"
      },
      {
        "value": 158,
        "time": "11:40"
      },
      {
        "value": 180,
        "time": "11:50"
      },
      {
        "value": 200,
        "time": "12:00"
      },
      {
        "value": 198,
        "time": "12:10"
      },
      {
        "value": 200,
        "time": "12:20"
      },
      {
        "value": 195,
        "time": "12:30"
      },
      {
        "value": 180,
        "time": "12:40"
      },
      {
        "value": 175,
        "time": "12:50"
      },
      {
        "value": 180,
        "time": "13:00"
      },
      {
        "value": 172,
        "time": "13:10"
      },
      {
        "value": 184,
        "time": "13:20"
      },
      {
        "value": 174,
        "time": "13:30"
      },
      {
        "value": 145,
        "time": "13:40"
      },
      {
        "value": 135,
        "time": "13:50"
      },
      {
        "value": 120,
        "time": "14:00"
      },
      {
        "value": 110,
        "time": "14:10"
      },
      {
        "value": 100,
        "time": "14:20"
      },
      {
        "value": 105,
        "time": "14:30"
      },
      {
        "value": 108,
        "time": "14:40"
      },
      {
        "value": 110,
        "time": "14:50"
      },
      {
        "value": 90,
        "time": "15:00"
      },
      {
        "value": 98,
        "time": "15:10"
      },
      {
        "value": 100,
        "time": "15:20"
      },
      {
        "value": 110,
        "time": "15:30"
      },
      {
        "value": 105,
        "time": "15:40"
      },
      {
        "value": 100,
        "time": "15:50"
      },
      {
        "value": 98,
        "time": "16:00"
      },
      {
        "value": 90,
        "time": "16:10"
      },
      {
        "value": 80,
        "time": "16:20"
      },
      {
        "value": 60,
        "time": "16:30"
      },
      {
        "value": 54,
        "time": "16:40"
      },
      {
        "value": 50,
        "time": "16:50"
      },
      {
        "value": 43,
        "time": "17:00"
      },
      {
        "value": 30,
        "time": "17:10"
      },
      {
        "value": 34,
        "time": "17:20"
      },
      {
        "value": 39,
        "time": "17:30"
      },
      {
        "value": 46,
        "time": "17:40"
      },
      {
        "value": 52,
        "time": "17:50"
      },
      {
        "value": 89,
        "time": "18:00"
      },
      {
        "value": 135,
        "time": "18:10"
      },
      {
        "value": 130,
        "time": "18:20"
      },
      {
        "value": 145,
        "time": "18:30"
      },
      {
        "value": 159,
        "time": "18:40"
      },
      {
        "value": 165,
        "time": "18:50"
      },
      {
        "value": 200,
        "time": "19:00"
      },
      {
        "value": 200,
        "time": "19:10"
      },
      {
        "value": 195,
        "time": "19:20"
      },
      {
        "value": 187,
        "time": "19:30"
      },
      {
        "value": 178,
        "time": "19:40"
      },
      {
        "value": 186,
        "time": "19:50"
      },
      {
        "value": 173,
        "time": "20:00"
      },
      {
        "value": 156,
        "time": "20:10"
      },
      {
        "value": 165,
        "time": "20:20"
      },
      {
        "value": 146,
        "time": "20:30"
      },
      {
        "value": 135,
        "time": "20:40"
      },
      {
        "value": 150,
        "time": "20:50"
      },
      {
        "value": 142,
        "time": "21:00"
      },
      {
        "value": 120,
        "time": "21:10"
      },
      {
        "value": 110,
        "time": "21:20"
      },
      {
        "value": 105,
        "time": "21:30"
      },
      {
        "value": 100,
        "time": "21:40"
      },
      {
        "value": 90,
        "time": "21:50"
      },
      {
        "value": 100,
        "time": "22:00"
      },
      {
        "value": 95,
        "time": "22:10"
      },
      {
        "value": 98,
        "time": "22:20"
      },
      {
        "value": 58,
        "time": "22:30"
      },
      {
        "value": 45,
        "time": "22:40"
      },
      {
        "value": 30,
        "time": "22:50"
      },
      {
        "value": 25,
        "time": "23:00"
      }
    ],
    "datasemanas": [
      {
        "value": 168,
        "time": "Semana1"
      },
      {
        "value": 146,
        "time": "Semana2"
      },
      {
        "value": 184,
        "time": "Semana3"
      },
      {
        "value": 190,
        "time": "Semana4"
      }
    ],
    "datadias": [
      {
        "value": 105,
        "time": "Lunes"
      },
      {
        "value": 160,
        "time": "Martes"
      },
      {
        "value": 110,
        "time": "Miercoles"
      },
      {
        "value": 114,
        "time": "Jueves"
      },
      {
        "value": 98,
        "time": "Viernes"
      },
      {
        "value": 184,
        "time": "Sabado"
      },
      {
        "value": 155,
        "time": "Domingo"
      }
    ],
    "nombre": "Linea Roja",
    "idlinea": 1,
    "color": "#FF0000"
  },
  {
    "datameses": [
      {
        "value": 115,
        "time": "Enero"
      },
      {
        "value": 90,
        "time": "Febrero"
      },
      {
        "value": 106,
        "time": "Marzo"
      },
      {
        "value": 110,
        "time": "Abril"
      },
      {
        "value": 95,
        "time": "Mayo"
      },
      {
        "value": 100,
        "time": "Junio"
      },
      {
        "value": 132,
        "time": "Julio"
      },
      {
        "value": 153,
        "time": "Agosto"
      },
      {
        "value": 105,
        "time": "Septiembre"
      },
      {
        "value": 145,
        "time": "Octubre"
      },
      {
        "value": 175,
        "time": "Noviembre"
      },
      {
        "value": 188,
        "time": "Diciembre"
      }
    ],
    "datahoras": [
      {
        "value": 84,
        "time": "06:00"
      },
      {
        "value": 90,
        "time": "06:10"
      },
      {
        "value": 94,
        "time": "06:20"
      },
      {
        "value": 100,
        "time": "06:30"
      },
      {
        "value": 123,
        "time": "06:40"
      },
      {
        "value": 126,
        "time": "06:50"
      },
      {
        "value": 180,
        "time": "07:00"
      },
      {
        "value": 176,
        "time": "07:10"
      },
      {
        "value": 155,
        "time": "07:20"
      },
      {
        "value": 179,
        "time": "07:30"
      },
      {
        "value": 180,
        "time": "07:40"
      },
      {
        "value": 186,
        "time": "07:50"
      },
      {
        "value": 200,
        "time": "08:00"
      },
      {
        "value": 200,
        "time": "08:10"
      },
      {
        "value": 196,
        "time": "08:20"
      },
      {
        "value": 182,
        "time": "08:30"
      },
      {
        "value": 180,
        "time": "08:40"
      },
      {
        "value": 147,
        "time": "08:50"
      },
      {
        "value": 145,
        "time": "09:00"
      },
      {
        "value": 130,
        "time": "09:10"
      },
      {
        "value": 127,
        "time": "09:20"
      },
      {
        "value": 110,
        "time": "09:30"
      },
      {
        "value": 114,
        "time": "09:40"
      },
      {
        "value": 115,
        "time": "09:50"
      },
      {
        "value": 112,
        "time": "10:00"
      },
      {
        "value": 108,
        "time": "10:10"
      },
      {
        "value": 104,
        "time": "10:20"
      },
      {
        "value": 92,
        "time": "10:30"
      },
      {
        "value": 90,
        "time": "10:40"
      },
      {
        "value": 85,
        "time": "10:50"
      },
      {
        "value": 113,
        "time": "11:00"
      },
      {
        "value": 108,
        "time": "11:10"
      },
      {
        "value": 104,
        "time": "11:20"
      },
      {
        "value": 132,
        "time": "11:30"
      },
      {
        "value": 154,
        "time": "11:40"
      },
      {
        "value": 182,
        "time": "11:50"
      },
      {
        "value": 198,
        "time": "12:00"
      },
      {
        "value": 199,
        "time": "12:10"
      },
      {
        "value": 200,
        "time": "12:20"
      },
      {
        "value": 200,
        "time": "12:30"
      },
      {
        "value": 190,
        "time": "12:40"
      },
      {
        "value": 186,
        "time": "12:50"
      },
      {
        "value": 182,
        "time": "13:00"
      },
      {
        "value": 175,
        "time": "13:10"
      },
      {
        "value": 183,
        "time": "13:20"
      },
      {
        "value": 171,
        "time": "13:30"
      },
      {
        "value": 147,
        "time": "13:40"
      },
      {
        "value": 133,
        "time": "13:50"
      },
      {
        "value": 121,
        "time": "14:00"
      },
      {
        "value": 119,
        "time": "14:10"
      },
      {
        "value": 106,
        "time": "14:20"
      },
      {
        "value": 103,
        "time": "14:30"
      },
      {
        "value": 104,
        "time": "14:40"
      },
      {
        "value": 111,
        "time": "14:50"
      },
      {
        "value": 98,
        "time": "15:00"
      },
      {
        "value": 95,
        "time": "15:10"
      },
      {
        "value": 104,
        "time": "15:20"
      },
      {
        "value": 113,
        "time": "15:30"
      },
      {
        "value": 102,
        "time": "15:40"
      },
      {
        "value": 103,
        "time": "15:50"
      },
      {
        "value": 98,
        "time": "16:00"
      },
      {
        "value": 90,
        "time": "16:10"
      },
      {
        "value": 87,
        "time": "16:20"
      },
      {
        "value": 65,
        "time": "16:30"
      },
      {
        "value": 52,
        "time": "16:40"
      },
      {
        "value": 50,
        "time": "16:50"
      },
      {
        "value": 44,
        "time": "17:00"
      },
      {
        "value": 32,
        "time": "17:10"
      },
      {
        "value": 34,
        "time": "17:20"
      },
      {
        "value": 31,
        "time": "17:30"
      },
      {
        "value": 44,
        "time": "17:40"
      },
      {
        "value": 55,
        "time": "17:50"
      },
      {
        "value": 83,
        "time": "18:00"
      },
      {
        "value": 136,
        "time": "18:10"
      },
      {
        "value": 133,
        "time": "18:20"
      },
      {
        "value": 144,
        "time": "18:30"
      },
      {
        "value": 152,
        "time": "18:40"
      },
      {
        "value": 167,
        "time": "18:50"
      },
      {
        "value": 200,
        "time": "19:00"
      },
      {
        "value": 200,
        "time": "19:10"
      },
      {
        "value": 200,
        "time": "19:20"
      },
      {
        "value": 189,
        "time": "19:30"
      },
      {
        "value": 174,
        "time": "19:40"
      },
      {
        "value": 182,
        "time": "19:50"
      },
      {
        "value": 177,
        "time": "20:00"
      },
      {
        "value": 157,
        "time": "20:10"
      },
      {
        "value": 166,
        "time": "20:20"
      },
      {
        "value": 145,
        "time": "20:30"
      },
      {
        "value": 134,
        "time": "20:40"
      },
      {
        "value": 153,
        "time": "20:50"
      },
      {
        "value": 142,
        "time": "21:00"
      },
      {
        "value": 128,
        "time": "21:10"
      },
      {
        "value": 116,
        "time": "21:20"
      },
      {
        "value": 103,
        "time": "21:30"
      },
      {
        "value": 102,
        "time": "21:40"
      },
      {
        "value": 90,
        "time": "21:50"
      },
      {
        "value": 99,
        "time": "22:00"
      },
      {
        "value": 94,
        "time": "22:10"
      },
      {
        "value": 98,
        "time": "22:20"
      },
      {
        "value": 58,
        "time": "22:30"
      },
      {
        "value": 45,
        "time": "22:40"
      },
      {
        "value": 34,
        "time": "22:50"
      },
      {
        "value": 22,
        "time": "23:00"
      }
    ],
    "datasemanas": [
      {
        "value": 185,
        "time": "Semana1"
      },
      {
        "value": 169,
        "time": "Semana2"
      },
      {
        "value": 148,
        "time": "Semana3"
      },
      {
        "value": 190,
        "time": "Semana4"
      }
    ],
    "datadias": [
      {
        "value": 160,
        "time": "Lunes"
      },
      {
        "value": 85,
        "time": "Martes"
      },
      {
        "value": 145,
        "time": "Miercoles"
      },
      {
        "value": 114,
        "time": "Jueves"
      },
      {
        "value": 104,
        "time": "Viernes"
      },
      {
        "value": 198,
        "time": "Sabado"
      },
      {
        "value": 155,
        "time": "Domingo"
      }
    ],
    "nombre": "Linea Amarilla",
    "idlinea": 2,
    "color": "#FFFF00"
  },
  {
    "datameses": [
      {
        "value": 126,
        "time": "Enero"
      },
      {
        "value": 157,
        "time": "Febrero"
      },
      {
        "value": 132,
        "time": "Marzo"
      },
      {
        "value": 108,
        "time": "Abril"
      },
      {
        "value": 105,
        "time": "Mayo"
      },
      {
        "value": 182,
        "time": "Junio"
      },
      {
        "value": 110,
        "time": "Julio"
      },
      {
        "value": 130,
        "time": "Agosto"
      },
      {
        "value": 148,
        "time": "Septiembre"
      },
      {
        "value": 150,
        "time": "Octubre"
      },
      {
        "value": 162,
        "time": "Noviembre"
      },
      {
        "value": 175,
        "time": "Diciembre"
      }
    ],
    "datahoras": [
      {
        "value": 88,
        "time": "06:00"
      },
      {
        "value": 83,
        "time": "06:10"
      },
      {
        "value": 81,
        "time": "06:20"
      },
      {
        "value": 99,
        "time": "06:30"
      },
      {
        "value": 96,
        "time": "06:40"
      },
      {
        "value": 104,
        "time": "06:50"
      },
      {
        "value": 113,
        "time": "07:00"
      },
      {
        "value": 136,
        "time": "07:10"
      },
      {
        "value": 158,
        "time": "07:20"
      },
      {
        "value": 162,
        "time": "07:30"
      },
      {
        "value": 174,
        "time": "07:40"
      },
      {
        "value": 187,
        "time": "07:50"
      },
      {
        "value": 205,
        "time": "08:00"
      },
      {
        "value": 209,
        "time": "08:10"
      },
      {
        "value": 196,
        "time": "08:20"
      },
      {
        "value": 188,
        "time": "08:30"
      },
      {
        "value": 182,
        "time": "08:40"
      },
      {
        "value": 151,
        "time": "08:50"
      },
      {
        "value": 142,
        "time": "09:00"
      },
      {
        "value": 121,
        "time": "09:10"
      },
      {
        "value": 114,
        "time": "09:20"
      },
      {
        "value": 108,
        "time": "09:30"
      },
      {
        "value": 119,
        "time": "09:40"
      },
      {
        "value": 115,
        "time": "09:50"
      },
      {
        "value": 114,
        "time": "10:00"
      },
      {
        "value": 112,
        "time": "10:10"
      },
      {
        "value": 104,
        "time": "10:20"
      },
      {
        "value": 91,
        "time": "10:30"
      },
      {
        "value": 90,
        "time": "10:40"
      },
      {
        "value": 93,
        "time": "10:50"
      },
      {
        "value": 130,
        "time": "11:00"
      },
      {
        "value": 135,
        "time": "11:10"
      },
      {
        "value": 138,
        "time": "11:20"
      },
      {
        "value": 130,
        "time": "11:30"
      },
      {
        "value": 158,
        "time": "11:40"
      },
      {
        "value": 170,
        "time": "11:50"
      },
      {
        "value": 200,
        "time": "12:00"
      },
      {
        "value": 198,
        "time": "12:10"
      },
      {
        "value": 200,
        "time": "12:20"
      },
      {
        "value": 199,
        "time": "12:30"
      },
      {
        "value": 189,
        "time": "12:40"
      },
      {
        "value": 174,
        "time": "12:50"
      },
      {
        "value": 185,
        "time": "13:00"
      },
      {
        "value": 176,
        "time": "13:10"
      },
      {
        "value": 183,
        "time": "13:20"
      },
      {
        "value": 173,
        "time": "13:30"
      },
      {
        "value": 144,
        "time": "13:40"
      },
      {
        "value": 132,
        "time": "13:50"
      },
      {
        "value": 129,
        "time": "14:00"
      },
      {
        "value": 114,
        "time": "14:10"
      },
      {
        "value": 105,
        "time": "14:20"
      },
      {
        "value": 103,
        "time": "14:30"
      },
      {
        "value": 102,
        "time": "14:40"
      },
      {
        "value": 118,
        "time": "14:50"
      },
      {
        "value": 99,
        "time": "15:00"
      },
      {
        "value": 98,
        "time": "15:10"
      },
      {
        "value": 100,
        "time": "15:20"
      },
      {
        "value": 119,
        "time": "15:30"
      },
      {
        "value": 104,
        "time": "15:40"
      },
      {
        "value": 112,
        "time": "15:50"
      },
      {
        "value": 92,
        "time": "16:00"
      },
      {
        "value": 92,
        "time": "16:10"
      },
      {
        "value": 89,
        "time": "16:20"
      },
      {
        "value": 64,
        "time": "16:30"
      },
      {
        "value": 54,
        "time": "16:40"
      },
      {
        "value": 50,
        "time": "16:50"
      },
      {
        "value": 43,
        "time": "17:00"
      },
      {
        "value": 30,
        "time": "17:10"
      },
      {
        "value": 39,
        "time": "17:20"
      },
      {
        "value": 32,
        "time": "17:30"
      },
      {
        "value": 42,
        "time": "17:40"
      },
      {
        "value": 53,
        "time": "17:50"
      },
      {
        "value": 84,
        "time": "18:00"
      },
      {
        "value": 135,
        "time": "18:10"
      },
      {
        "value": 132,
        "time": "18:20"
      },
      {
        "value": 142,
        "time": "18:30"
      },
      {
        "value": 151,
        "time": "18:40"
      },
      {
        "value": 160,
        "time": "18:50"
      },
      {
        "value": 200,
        "time": "19:00"
      },
      {
        "value": 200,
        "time": "19:10"
      },
      {
        "value": 200,
        "time": "19:20"
      },
      {
        "value": 198,
        "time": "19:30"
      },
      {
        "value": 187,
        "time": "19:40"
      },
      {
        "value": 186,
        "time": "19:50"
      },
      {
        "value": 165,
        "time": "20:00"
      },
      {
        "value": 156,
        "time": "20:10"
      },
      {
        "value": 154,
        "time": "20:20"
      },
      {
        "value": 143,
        "time": "20:30"
      },
      {
        "value": 132,
        "time": "20:40"
      },
      {
        "value": 155,
        "time": "20:50"
      },
      {
        "value": 148,
        "time": "21:00"
      },
      {
        "value": 147,
        "time": "21:10"
      },
      {
        "value": 165,
        "time": "21:20"
      },
      {
        "value": 154,
        "time": "21:30"
      },
      {
        "value": 106,
        "time": "21:40"
      },
      {
        "value": 95,
        "time": "21:50"
      },
      {
        "value": 124,
        "time": "22:00"
      },
      {
        "value": 99,
        "time": "22:10"
      },
      {
        "value": 105,
        "time": "22:20"
      },
      {
        "value": 65,
        "time": "22:30"
      },
      {
        "value": 43,
        "time": "22:40"
      },
      {
        "value": 38,
        "time": "22:50"
      },
      {
        "value": 28,
        "time": "23:00"
      }
    ],
    "datasemanas": [
      {
        "value": 185,
        "time": "Semana1"
      },
      {
        "value": 162,
        "time": "Semana2"
      },
      {
        "value": 150,
        "time": "Semana3"
      },
      {
        "value": 187,
        "time": "Semana4"
      }
    ],
    "datadias": [
      {
        "value": 137,
        "time": "Lunes"
      },
      {
        "value": 150,
        "time": "Martes"
      },
      {
        "value": 196,
        "time": "Miercoles"
      },
      {
        "value": 80,
        "time": "Jueves"
      },
      {
        "value": 132,
        "time": "Viernes"
      },
      {
        "value": 95,
        "time": "Sabado"
      },
      {
        "value": 128,
        "time": "Domingo"
      }
    ],
    "nombre": "Linea Verde",
    "idlinea": 3,
    "color": "#00FF00"
  }
];
