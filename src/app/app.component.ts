import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Todo } from './components/todo/todo';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(TodoComponent)
  private todoComponent!: TodoComponent;
  title = 'counter-app';
  data: Todo[] = [];

  ngAfterViewInit(): void {}

  getTitle() {
    console.log('rendering...');
    return this.title;
  }

  onAddTodo() {
    this.data = [...this.data, this.todoComponent.genNewTodo()];
  }

  onRemoveTodo(item: Todo) {
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
