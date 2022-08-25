import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Post } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  error = '';

  modalRef?: BsModalRef;
  newPostVisibility = true;

  @Output() responseEvent = new EventEmitter<Post>();

  constructor(
    private modalService: BsModalService,
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Content: [''],
      Image: [''],
    });
  }

  get f() {
    return this.form.controls;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

    this.modalService.onShown.subscribe(() => {
      this.newPostVisibility = false;
    });
    this.modalService.onHidden.subscribe(() => {
      this.newPostVisibility = true;
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.postService.createPost(this.form.value).subscribe(
      (data) => {
        this.form.reset();
        this.submitted = false;
        this.responseEvent.emit(data);
      },
      (error) => {
        this.error = error.error.message || error.statusText;
      }
    );
  }
}
