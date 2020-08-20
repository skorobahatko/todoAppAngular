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
  titleError: string;
  bodyError: string;

  constructor(private dataTransferService: DataTransferService) {
    this.titleInput = new FormControl('', [Validators.required]);
    this.bodyInput = new FormControl('', [Validators.required]);
    this.mainForm = new FormGroup({
      title: this.titleInput,
      body: this.bodyInput
    });
  }

  ngOnInit(): void {
  }
  save(mainForm: FormGroup): void {
    if (mainForm.controls.title.invalid || mainForm.controls.body.invalid) {
      if (mainForm.controls.title.invalid) {
        this.titleError = 'fill title please';
      }
      if (mainForm.controls.body.invalid) {
        this.bodyError = 'fill body please';
      }
    } else {
      this.todo.title = mainForm.controls.title.value;
      this.todo.body = mainForm.controls.body.value;
      console.log(this.todo);
      this.dataTransferService.changeState(this.todo);
      this.titleError = '';
      this.bodyError = '';
      mainForm.setValue({title: '', body: ''});
    }
  }
}
