import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos!: Todo[];

  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'Learn Angular',
        description: 'Learn Angular',
        completed: false,
      },
      {
        id: 2,
        title: 'Learn React',
        description: 'Learn React',
        completed: true,
      },
    ];
  }

  private generateRandomStr() {
    return Math.random().toString(36).substring(7);
  }

  private genNewTodo() {
    return {
      id: this.todos.length + 1,
      title: this.generateRandomStr(),
      description: this.generateRandomStr(),
      completed: Math.random() > 0.5,
    };
  }

  addTodo() {
    this.todos = [...this.todos, this.genNewTodo()];
  }

  removeTodo({ id }: Todo) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  removeAllTodos() {
    this.todos = [];
  }

  setComplete({ id }: Todo) {
    console.log(id);
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }
}
