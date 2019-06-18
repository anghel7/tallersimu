import { Component, OnInit } from '@angular/core';
import { LineaService } from '../../shared/services/linea.service';
import { Linea } from '../../shared/models/linea';

@Component({
  selector: 'app-linea-parada',
  templateUrl: './linea-parada.component.html',
  styleUrls: ['./linea-parada.component.scss']
})
export class LineaParadaComponent implements OnInit {

  lineas: Linea[] = [];

  constructor(private lineaService: LineaService) { }

  ngOnInit() {
    this.lineaService.getAll()
      .subscribe(
        (response) => {
          this.lineas = response;
        }
      );
  }

}
