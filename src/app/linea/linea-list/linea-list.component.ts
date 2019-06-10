import { Component, OnInit } from '@angular/core';
import { LineaService } from '../../shared/services/linea.service';
import { Linea } from '../../shared/models/linea';

@Component({
  selector: 'app-linea-list',
  templateUrl: './linea-list.component.html',
  styleUrls: ['./linea-list.component.scss']
})
export class LineaListComponent implements OnInit {

  lineaList: Linea[] = [];

  constructor(private lineaService: LineaService) { }

  ngOnInit() {
    this.lineaService.getAll().subscribe(
      (response: Linea[]) => {
        this.lineaList = response;
      }
    );
  }

}
