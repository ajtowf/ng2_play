/// <reference path="../../models.ts"/>

import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control} from 'angular2/angular2';
import {Validators} from 'angular2/angular2';
import {TodoItem} from '../../models';

@Component({
  selector: 'todo',
  viewBindings: [FormBuilder]
})
@View({
  templateUrl: './components/todo/todo.html',
  directives: [NgFor, NgIf, FORM_DIRECTIVES]
})
export class Todo {
  todos: Array<TodoItem>;

  myForm: ControlGroup;
  newTodo: Control;

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
