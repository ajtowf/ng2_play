/// <reference path="../../models.ts"/>

import {Component, View} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control} from 'angular2/common';
import {Validators} from 'angular2/common';
import {TodoItem} from '../../models';

@Component({
  selector: 'todo',
  viewBindings: [FormBuilder]
})
@View({
  templateUrl: './app/components/todo/todo.html',
  directives: [FORM_DIRECTIVES]
})
export class Todo {
  todos: Array<TodoItem>;

  myForm: ControlGroup;
  newTodo: any;

  constructor(fb: FormBuilder) {
    this.todos = new Array<TodoItem>();
    this.todos.push(new TodoItem('Hello world', false));

    this.myForm = fb.group({
      newTodo: ['', Validators.required]
    });

    this.newTodo = this.myForm.controls['newTodo'];
  }

  removeTodo(item: TodoItem) {
    this.todos.splice(this.todos.indexOf(item), 1);
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.todos.push(new TodoItem(this.newTodo.value, false));
      this.newTodo.updateValue('');
    }
  }

  completeAll() {
    for (var todo of this.todos) {
      todo.completed = true;
    }
  }
}
