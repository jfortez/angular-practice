import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { GroupComponentsComponent } from './components/card/card.component';
import { TodoComponent } from './components/todo/todo.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { ChangelogChildComponent } from './components/changelog-child/changelog-child.component';
import { ChangelogParentComponent } from './components/changelog-parent/changelog-parent.component';
import { VoterComponent } from './components/voter/voter.component';
import { VoteTakerComponent } from './components/vote-taker/vote-taker.component';
import { TimerComponent } from './components/timer/timer.component';
import { ViewChildComponent } from './components/view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    GroupComponentsComponent,
    TodoComponent,
    FetchDataComponent,
    ChangelogChildComponent,
    ChangelogParentComponent,
    VoterComponent,
    VoteTakerComponent,
    TimerComponent,
    ViewChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
