import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = []

  constructor(private postsService: PostService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() : void {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
