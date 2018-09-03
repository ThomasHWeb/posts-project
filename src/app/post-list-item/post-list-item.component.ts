import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../models/post.model';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addLike() {
    this.postService.addLike(this.post);
  }

  reduceLike() {
    this.postService.reduceLike(this.post);
  }

  deletePost() {
    this.postService.deletePost(this.post);
  }
}
