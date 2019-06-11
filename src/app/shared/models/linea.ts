import { Vagon } from './vagon';
import { Parada } from './parada';

export interface Linea {
 id: number,
 nombre: String,
 descripcion: String,
 vagones: Vagon[],
 paradas: Parada[]
}
