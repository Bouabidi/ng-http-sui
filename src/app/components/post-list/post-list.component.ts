import { Component, OnInit, HostListener } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { IMessage } from 'ng2-semantic-ui';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  allPosts: Post[] = [];
  posts: Post[] = [];
  total = 0;
  selectedPage = 1;
  start = 0;
  limit = 12;
  end = this.limit;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() : void {
    this.postService.getPosts()
      .subscribe(posts => {
        this.total = posts.length;
        this.allPosts = posts;
        this.posts = this.allPosts.slice(this.start, this.end);
      });
  }

  public pageChange(page): void {
    this.start = (this.selectedPage - 1) * this.limit;
    this.end = this.start + this.limit;
    this.posts = this.allPosts.slice(this.start, this.end);
  }

}
