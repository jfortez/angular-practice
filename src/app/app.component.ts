import { Component } from '@angular/core';
import { Todo } from './components/todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counter-app';
  data: Todo[] = [];

  onAddTodo(newItem: Todo) {
    this.data = [...this.data, newItem];
  }

  onRemoveTodo(item: Todo) {
    console.log(item);
    this.data = this.data.filter((todo) => todo.id !== item.id);
  }

  onCheck(item: Todo) {
    this.data = this.data.map((todo) => {
      if (todo.id === item.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }

  onRemoveAll() {
    this.data = [];
  }
}
