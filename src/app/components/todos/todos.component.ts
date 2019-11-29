import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { Todo } from 'src/app/model/todo.model';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  dataSource;
  displayedColumns = ['title','status']
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    
    this.apiService.getTodos().subscribe((todoList)=>{
      console.log(todoList);
      this.dataSource = new MatTableDataSource<Todo>(todoList);
      this.dataSource.paginator = this.paginator;
    });
    
  }
}