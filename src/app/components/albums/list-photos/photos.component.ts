import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Album } from 'src/app/model/album.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  id: number;
  viewAlbum: Album;
  viewAlbumPhotos;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.viewAlbum = new Album()
    this.id = this.route.snapshot.params['id'];
    this.apiService.getAlbumById(this.id).subscribe((album)=>{
      this.viewAlbum = album;
      
      this.apiService.getAlbumPhotos(album.id).subscribe((albumPhotos)=>{
        this.viewAlbumPhotos = albumPhotos;
      });
      
      this.apiService.getUser(album.userId).subscribe((albumUser)=>{
        this.viewAlbum.userName = albumUser.name;
      });

    });
  }

}
