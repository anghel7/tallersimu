import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LineaService } from '../../shared/services/linea.service';
import { Linea } from '../../shared/models/linea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linea-create',
  templateUrl: './linea-create.component.html',
  styleUrls: ['./linea-create.component.scss']
})
export class LineaCreateComponent implements OnInit {

  lineaForm = this.formBuilder.group({
    id: [undefined],
    nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private lineaService: LineaService
  ) { }

  ngOnInit() {
  }

  createLinea(): void {
    this.lineaService.create(this.lineaForm.value).subscribe(
      (response: Linea) => {
        this.router.navigate(['linealist']);
      }
    );
  }
}
