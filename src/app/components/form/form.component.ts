import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataTransferService} from '../data-transfer.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  todo: Todo = {title: '', body:  ''};
  mainForm: FormGroup;
  titleInput: FormControl;
  bodyInput: FormControl;

  constructor(private dataTransferService: DataTransferService) {
    this.titleInput = new FormControl('');
    this.bodyInput = new FormControl('');
    this.mainForm = new FormGroup({
      title: this.titleInput,
      body: this.bodyInput
    });
  }

  ngOnInit(): void {
  }
  save(mainForm: FormGroup): void {
    this.todo.title = mainForm.controls.title.value;
    this.todo.body = mainForm.controls.body.value;
    this.dataTransferService.changeState(this.todo);
  }
}
