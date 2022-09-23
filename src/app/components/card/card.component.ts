import { Component, Input, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/blog-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  postBlog

  constructor(postBlog:BlogDataService) {
    this.postBlog = postBlog.getPosts();
  }

  ngOnInit(): void {
  }

}
