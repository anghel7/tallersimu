import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineaService } from '../../shared/services/linea.service';
import { Linea } from '../../shared/models/linea';
import { Validators, FormBuilder } from '@angular/forms';
import { Parada } from '../../shared/models/parada';
import { Vagon } from '../../shared/models/vagon';

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

  vagonForm = this.formBuilder.group({
    id: [0],
    numero: [0,],
    cantidad: [0, [Validators.required]],

  });

  paradaForm = this.formBuilder.group({
    id: [0],
    origen: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    destino: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    tiempo: [0, [Validators.required]],
  });

  createPrada() {
    let parada: Parada = this.paradaForm.value;
    this.linea.paradas.push(parada);

  }
  createVagon() {
    let vagon: Vagon = this.vagonForm.value;
    vagon.numero = this.linea.vagones.length + 1;
    this.linea.vagones.push(vagon);
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private lineaService: LineaService,
    private formBuilder: FormBuilder) { }

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
