import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log(`Found post ${id}`);
      this.postService.getPost(id)
        .subscribe(post => this.post = post)
    } else {
      console.log('Selected post not found');
      this.location.back();
    }
  }

}
