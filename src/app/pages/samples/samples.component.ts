import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Todo } from '../../components/todo/todo';
import { TodoComponent } from '../../components/todo/todo.component';

import { CounterComponent } from '../../components/counter/counter.component';
import { GroupComponentsComponent } from '../../components/card/card.component';
import { FetchDataComponent } from '../../components/fetch-data/fetch-data.component';
import { ChangelogChildComponent } from '../../components/changelog-child/changelog-child.component';
import { ChangelogParentComponent } from '../../components/changelog-parent/changelog-parent.component';
import { VoterComponent } from '../../components/voter/voter.component';
import { VoteTakerComponent } from '../../components/vote-taker/vote-taker.component';
import { TimerComponent } from '../../components/timer/timer.component';
import { ViewChildComponent } from '../../components/view-child/view-child.component';
import { MissionControlComponent } from '../../components/mission-control/mission-control.component';
import { AstronautComponent } from '../../components/astronaut/astronaut.component';
import { TitleComponent } from 'src/app/components/title/title.component';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css'],
  standalone: true,
  imports: [
    CounterComponent,
    GroupComponentsComponent,
    FetchDataComponent,
    ChangelogChildComponent,
    ChangelogParentComponent,
    VoterComponent,
    VoteTakerComponent,
    TimerComponent,
    ViewChildComponent,
    MissionControlComponent,
    AstronautComponent,
    TodoComponent,
    TitleComponent,
    CommonModule,
  ],
})
export class SamplesComponent implements AfterViewInit {
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
