import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control} from 'angular2/angular2';
import {Validators} from 'angular2/angular2';
import {TodoItem} from 'models'

@Component({
  selector: 'app',
  viewBindings: [FormBuilder]
})
@View({
  templateUrl: 'app.html', directives: [NgFor, NgIf, FORM_DIRECTIVES]
})
class AppComponent {
  todos: Array<TodoItem>;
  
  myForm: ControlGroup;
  newTodo: Control;
  
  constructor(fb: FormBuilder) {
    this.todos = new Array<TodoItem>();    
    this.todos.push(new TodoItem("Hello world", false));
    
    this.myForm = fb.group({
        newTodo: ['', Validators.required]
    });
    
    this.newTodo = this.myForm.controls['newTodo'];
  }
  
  removeTodo(item: TodoItem) {
    this.todos.splice(this.todos.indexOf(item), 1);
  }
  
  onSubmit() {
    this.todos.push(new TodoItem(this.newTodo.value, false));    
    this.newTodo.updateValue('');
  }
  
  completeAll() {    
    for (var todo of this.todos) {
      todo.completed = true;
    }
  }
}

bootstrap(AppComponent);