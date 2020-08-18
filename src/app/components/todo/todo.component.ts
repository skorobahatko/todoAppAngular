import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../data-transfer.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos = [];
  newTodo: Todo;
  constructor(private dataTransferService: DataTransferService) {
    console.log(this.todos);
  }

  ngOnInit(): void {
    console.log(this.todos);
    this.dataTransferService.state.subscribe(
      todo => {
        if (todo === {title: '', body: ''}) {
          this.todos = [];
        } else {
          console.log(this.todos);
          this.newTodo = todo;
          console.log(this.newTodo);
          this.todos.push(this.newTodo);
          console.log(this.todos);

        }
      }
    );
  }
}
