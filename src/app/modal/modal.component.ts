import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PassingdataService } from '../passingdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  numberOfTickets:number;
  constructor(public activeModal: NgbActiveModal,
    private passingdataservice:PassingdataService,
    private router:Router) { }


  save()
  {

   this.passingdataservice.setTicket(this.numberOfTickets);
   this.activeModal.close('Close click');
   this.router.navigate([`pay`]);
  }

  
}
