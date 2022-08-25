import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  prependPost(post: Post) {}
}
