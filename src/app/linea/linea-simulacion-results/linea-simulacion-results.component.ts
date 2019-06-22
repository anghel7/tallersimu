import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { DataLinea } from '../../shared/models/data-linea';
import { log } from 'util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from '../my-modal/my-modal.component';

@Component({
  selector: 'app-linea-simulacion-results',
  templateUrl: './linea-simulacion-results.component.html',
  styleUrls: ['./linea-simulacion-results.component.scss']
})
export class LineaSimulacionResultsComponent implements OnInit {

  public dataMeses: DataTable;
  public dataSemanas: DataTable;
  public dataDias: DataTable;
  public dataHoras: DataTable;

  constructor(private dataService: DataService,
    private modalService: NgbModal) { }

  /** */
  open() {
    const modalRef = this.modalService.open(MyModalComponent);
    modalRef.componentInstance.name = 'World';
  }
  /** */

  ngOnInit() {
    this.dataService.getAll()
      .subscribe(
        (response: DataLinea[]) => {
          this.setupDataMeses(response);
          this.setupDataSemanas(response);
          this.setupDataDias(response);
          this.setupDataHoras(response);
        }
      );
  }

  private setupDataMeses(data: DataLinea[]): any {
    this.dataMeses = {
      headers: [],
      columns: []
    };
    let aux: any[] = [];
    this.dataMeses.headers.push("");
    data.forEach(dataLinea => {
      this.dataMeses.headers.push(dataLinea.nombre);
      aux.push(dataLinea.datameses);
    });
    if (aux.length >= 1) {
      for (let index = 0; index < aux[0].length; index++) {
        const element0 = aux[0][index];
        const element1 = aux[1][index];
        const element2 = aux[2][index];
        let arrayItem: any[] = [];
        arrayItem.push(element0.time);
        arrayItem.push(element0.value);
        arrayItem.push(element1.value);
        arrayItem.push(element2.value);
        this.dataMeses.columns.push(arrayItem)
      }
    }
  }

  private setupDataSemanas(data: DataLinea[]): any {
    this.dataSemanas = {
      headers: [],
      columns: []
    };
    let aux: any[] = [];
    this.dataSemanas.headers.push("");
    data.forEach(dataLinea => {
      this.dataSemanas.headers.push(dataLinea.nombre);
      aux.push(dataLinea.datasemanas);
    });
    if (aux.length >= 1) {
      for (let index = 0; index < aux[0].length; index++) {
        const element0 = aux[0][index];
        const element1 = aux[1][index];
        const element2 = aux[2][index];
        let arrayItem: any[] = [];
        arrayItem.push(element0.time);
        arrayItem.push(element0.value);
        arrayItem.push(element1.value);
        arrayItem.push(element2.value);
        this.dataSemanas.columns.push(arrayItem)
      }
    }
  }

  private setupDataDias(data: DataLinea[]): any {
    this.dataDias = {
      headers: [],
      columns: []
    };
    let aux: any[] = [];
    this.dataDias.headers.push("");
    data.forEach(dataLinea => {
      this.dataDias.headers.push(dataLinea.nombre);
      aux.push(dataLinea.datadias);
    });
    if (aux.length >= 1) {
      for (let index = 0; index < aux[0].length; index++) {
        const element0 = aux[0][index];
        const element1 = aux[1][index];
        const element2 = aux[2][index];
        let arrayItem: any[] = [];
        arrayItem.push(element0.time);
        arrayItem.push(element0.value);
        arrayItem.push(element1.value);
        arrayItem.push(element2.value);
        this.dataDias.columns.push(arrayItem)
      }
    }
  }

  private setupDataHoras(data: DataLinea[]): any {
    this.dataHoras = {
      headers: [],
      columns: []
    };
    let aux: any[] = [];
    this.dataHoras.headers.push("");
    data.forEach(dataLinea => {
      this.dataHoras.headers.push(dataLinea.nombre);
      aux.push(dataLinea.datahoras);
    });
    if (aux.length >= 1) {
      for (let index = 0; index < aux[0].length; index++) {
        const element0 = aux[0][index];
        const element1 = aux[1][index];
        const element2 = aux[2][index];
        let arrayItem: any[] = [];
        arrayItem.push(element0.time);
        arrayItem.push(element0.value);
        arrayItem.push(element1.value);
        arrayItem.push(element2.value);
        this.dataHoras.columns.push(arrayItem)
      }
    }
  }

}

export interface DataTable {
  headers: string[],
  columns: any[][],
}
