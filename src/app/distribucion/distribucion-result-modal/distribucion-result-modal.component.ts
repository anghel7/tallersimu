import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-distribucion-result-modal',
  templateUrl: './distribucion-result-modal.component.html',
  styleUrls: ['./distribucion-result-modal.component.scss']
})
export class DistribucionResultModalComponent implements OnInit {

  @Input() tbody;
  @Input() thead;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
