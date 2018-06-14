import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      id: 1,
      userId: 1,
      title: 'Awesome Post'
    },
    {
      id: 2,
      userId: 1,
      title: 'Another Awesome Post'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
