import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  state: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  constructor() { }
  changeState(value): void {
    console.log(this.state);
    this.state.next([...this.state.value, Object.assign({}, value)]);
  }
  deleteTodo(id): void {
    const arrayForDelete: Todo[] = this.state.getValue();
    arrayForDelete.splice(id, 1);
    this.state.next(arrayForDelete);
  }
}

