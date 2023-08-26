import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';

@Component({
  standalone: true,
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
  imports: [TimerComponent],
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild(TimerComponent)
  private timerComponent!: TimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit(): void {
    setTimeout(() => (this.seconds = () => this.timerComponent.seconds), 0);
  }

  start() {
    this.timerComponent.start();
  }
  stop() {
    this.timerComponent.stop();
  }
}
