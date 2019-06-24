import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DistribucionResultModalComponent } from '../distribucion-result-modal/distribucion-result-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-distribucion-bernoulli',
  templateUrl: './distribucion-bernoulli.component.html',
  styleUrls: ['./distribucion-bernoulli.component.scss']
})
export class DistribucionBernoulliComponent implements OnInit {

  form = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  submit(): void {
    const modalRef = this.modalService.open(DistribucionResultModalComponent);
    modalRef.componentInstance.thead = ["", "head 1", "head 2", "head 3"];
    modalRef.componentInstance.tbody = [
      ["Value 1", "Value 3", "Value 3", "Value 4"],
      ["Value 1", "Value 3", "Value 3", "Value 4"],
      ["Value 1", "Value 3", "Value 3", "Value 4"],
    ];

  }

}
