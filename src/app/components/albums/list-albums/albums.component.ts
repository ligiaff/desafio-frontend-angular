import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getAlbums().subscribe((data)=>{
      this.albums = data;
    });
  }

}
