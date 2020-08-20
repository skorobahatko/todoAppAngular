import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../data-transfer.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor(private dataTransferService: DataTransferService) {
  }
  ngOnInit(): void {
    this.dataTransferService.state.subscribe(
      data => this.todos = data
    );
  }
  deleteTodo(index): void {
    this.dataTransferService.deleteTodo(index);
  }
}
