import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/list-posts/posts.component';
import { ViewPostComponent } from './components/posts/view-post/view-post.component';
import { AlbumsComponent } from './components/albums/list-albums/albums.component';
import { PhotosComponent } from './components/albums/list-photos/photos.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
    { path: 'posts', component: PostsComponent },
    { path: 'posts/:id', component: ViewPostComponent },
    { path: 'albuns', component: AlbumsComponent },
    { path: 'albuns/:id', component: PhotosComponent },
    { path: 'todos', component: TodosComponent }
    
  ];

  export const routing = RouterModule.forRoot(routes);