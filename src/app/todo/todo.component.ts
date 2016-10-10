import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Validators} from '@angular/forms';
import {TodoItem} from '../shared';

import { MdCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-todo',
  viewProviders: [FormBuilder],
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  todos: Array<TodoItem>;

  fb: FormBuilder;
  myForm: FormGroup;
  newTodo: FormControl;

  constructor(fb: FormBuilder) {
    this.fb = fb;
    this.todos = new Array<TodoItem>();
    this.todos.push(new TodoItem('Hello world', false));

    this.newTodo = new FormControl('', Validators.required);
    this.myForm = this.fb.group({
      'newTodo': this.newTodo
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
  }

  removeTodo(item: TodoItem) {
    this.todos.splice(this.todos.indexOf(item), 1);
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      this.todos.push(new TodoItem(this.newTodo.value, false));
      this.myForm.reset();
    }
  }

  toggleAll(changedEvent: MdCheckboxChange) {
    this.todos.forEach(function(todo) {
      todo.completed = changedEvent.checked;
    });
  }
}
