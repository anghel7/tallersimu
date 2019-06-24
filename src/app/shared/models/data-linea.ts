import { GraphicPoint } from './graphic-point';

export interface DataLinea {
 datameses: GraphicPoint[];
 datahoras: GraphicPoint[];
 datasemanas: GraphicPoint[];
 datadias: GraphicPoint[];
 nombre: string;
 idlinea: number;
 color: string | "#FFFFFF";
};