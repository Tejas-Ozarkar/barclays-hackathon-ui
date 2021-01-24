import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BsModalService]
})
export class AppComponent {
  title = 'hackathon-ui';

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {
    this.modalRef = new BsModalRef();
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
