import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { Todo } from '../model/todo.model';
import { Album } from '../model/album.model';
import { Photo } from '../model/photos.model';
import { Post } from '../model/post.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://jsonplaceholder.typicode.com/';

  getPosts(): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + 'posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + 'posts/' + id);
  }
  
  getPostComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl + 'comments?postId=' + id);
  }

  getAlbums(): Observable<Album> {
    return this.http.get<Album>(this.baseUrl + 'albums');
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(this.baseUrl + 'albums/' + id);
  }

  getAlbumPhotos(id: number): Observable<Photo> {
    return this.http.get<Photo>(this.baseUrl + 'photos?albumId=' + id);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl + 'todos');
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.baseUrl + 'todos/' + id);
  }
  
}