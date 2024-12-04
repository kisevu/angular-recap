import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit{
 todoService = inject(TodosService);

 /* 
  rendering items onto the template requires
  to put the items on the todoService into some sort of signal()
  there are two steps to that
 */
  todoItems = signal<Array<Todo>>([]);



 //codes inside ngOnInit triggers once this component is initiated
 //initialization of the array is done here
  ngOnInit(): void {
    this.todoService.getTodos()
    .pipe(
      catchError((err)=> {
        console.log(err);
        throw err;
      })
    )
    .subscribe(
      (todos) => {
        this.todoItems.set(todos);
      }
    )
  }


}
