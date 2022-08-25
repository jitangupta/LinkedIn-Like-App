import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  modalRef?: BsModalRef;
  newPostVisibility = true;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

    this.modalService.onShown.subscribe(() => {
      this.newPostVisibility = false;
    });
    this.modalService.onHidden.subscribe(() => {
      this.newPostVisibility = true;
    });
  }

}
