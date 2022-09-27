import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDataService } from '../../blog-data.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postTitle:string = '';
  postBody:string = '';
  postImg:string = '';

  private postId: string = '';

  constructor(private postBlog:BlogDataService, private route:ActivatedRoute) {
    this.route.params.subscribe(
      res => this.postId = res['id']
    );
  }

  ngOnInit(): void {
    const post = this.postBlog.getPosts().filter(post => post.id == this.postId)[0];
    this.postTitle = post.title;
    this.postBody = post.body;
    this.postImg = post.img;
  }

}
