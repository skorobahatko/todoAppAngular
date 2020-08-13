import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTransferService} from './components/data-transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FormComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
