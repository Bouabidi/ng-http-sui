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

  post:Post;
  submitText:String = "Save";

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
      console.log(`edit existing post ${id}`);
      this.postService.getPost(id)
        .subscribe(post => this.post = post)
        this.submitText = "Update";
    } else {
      console.log('create new post');
      this.post = new Post();
      this.submitText = "Create";
    }
  }

  onSubmit() {
    if(this.post.id) { // Update Existing Post
      this.postService.updatePost(this.post)
        .subscribe(() => this.goBack());
    } else { // Create New Post
      this.postService.addPost(this.post)
        .subscribe(() => this.goBack());
    }
  }

  onDelete() {
    if(this.post.id) {
      this.postService.deletePost(this.post)
        .subscribe(() => this.goBack());
    }
  }

  goBack() {
    this.location.back();
  }
}
