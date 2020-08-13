import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  state: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>({});
  currentTodo = this.state.asObservable();

  constructor() { }
  changeState(value): void {
    console.log(value);
    this.state.next(value);
  }
}
