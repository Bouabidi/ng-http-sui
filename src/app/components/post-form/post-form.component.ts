import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input() post:Post;
  create:boolean = false;

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
    if(id) {
      this.postService.getPost(id)
        .subscribe(post => this.post = post);
    } else {
      this.create = true;
      this.post = new Post();
    }
  }

  save() {
    if(this.create) {
      this.postService.addPost(this.post)
        .subscribe(() => this.goBack());
    } else {
      this.postService.updatePost(this.post)
        .subscribe(() => this.goBack());
    }
  }

  goBack() {
    this.location.back();
  }
}
