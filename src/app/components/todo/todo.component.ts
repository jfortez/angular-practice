import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Todo } from './todo';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [CommonModule],
})
export class TodoComponent implements OnChanges {
  updates = 0;
  @Input() todos: Todo[] = [];
  @Output() onAddTodo = new EventEmitter<Todo>();
  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onRemoveAllTodos = new EventEmitter<void>();
  @Output() onCheck = new EventEmitter<Todo>();

  private generateRandomStr() {
    return Math.random().toString(36).substring(7);
  }

  genNewTodo() {
    return {
      id: this.generateRandomStr(),
      title: this.generateRandomStr(),
      description: this.generateRandomStr(),
      completed: Math.random() > 0.5,
    };
  }

  addTodo() {
    this.onAddTodo.emit(this.genNewTodo());
  }

  removeTodo(item: Todo) {
    this.onRemoveTodo.emit(item);
  }

  removeAllTodos() {
    this.onRemoveAllTodos.emit();
  }

  setComplete(item: Todo) {
    this.onCheck.emit(item);
  }

  ngOnChanges() {
    this.updates++;
  }
}
