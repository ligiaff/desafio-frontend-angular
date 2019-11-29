import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Post } from 'src/app/model/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  id: number;
  viewPost: Post;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.viewPost = new Post()
    this.id = this.route.snapshot.params['id'];
    this.apiService.getPostById(this.id).subscribe((post)=>{
      this.viewPost = post;

      this.apiService.getUser(post.userId).subscribe((postUser)=>{
        this.viewPost.userName = postUser.name;
      });
      
      console.log(this.id)
      this.apiService.getPostComments(post.id).subscribe((postComments)=>{
        this.viewPost.comments = postComments;
      });
    });

  }
}
