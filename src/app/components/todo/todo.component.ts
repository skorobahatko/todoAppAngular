import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../data-transfer.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo;
  constructor(private dataTransferService: DataTransferService) {
    console.log(this.todos);
  }

  ngOnInit(): void {
    console.log(this.todos);
    this.dataTransferService.currentTodo.subscribe(
      todo => {
        console.log(todo);
        console.log(this.todos);
        this.newTodo = todo;
        this.todos = [...this.todos, this.newTodo];
        console.log(this.dataTransferService.currentTodo);
      }
    );
  }
}
