import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineaService } from '../../shared/services/linea.service';
import { Linea } from '../../shared/models/linea';

@Component({
  selector: 'app-linea-edit',
  templateUrl: './linea-edit.component.html',
  styleUrls: ['./linea-edit.component.scss']
})
export class LineaEditComponent implements OnInit {
  linea: Linea = {
    id: 0,
    descripcion: "",
    nombre: "",
    vagones: [],
    paradas: []
  };

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private lineaService: LineaService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (data) => {
        if (data.has('id')) {
          this.lineaService.getById(Number(data.get('id')))
            .subscribe(
              (response: Linea) => {
                this.linea = response;
              },
              (error) => {
                console.log('error: ', error);
              }
            );
        }
      },
      (error) => {
        console.log('printing error', error);
      }
    );
  }

}
