import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getPosts().subscribe((data)=>{
      console.log(data);
      this.posts = data;
    });
  }

}
