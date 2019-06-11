import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  createLinea(): void {
    console.log('trying tto create', this.lineaForm.value);

  }
}
