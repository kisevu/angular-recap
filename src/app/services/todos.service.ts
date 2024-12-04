import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public todoItems: Array<Todo> = [

    {
      title: 'groceries',
      id: 0,
      userId: 100,
      completed: false
    },

    {
      title: 'cutleries',
      id: 1,
      userId: 100,
      completed: false
    },
  ];
  constructor() { }

}
