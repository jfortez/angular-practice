import { Component, OnDestroy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnDestroy {
  message = '';
  seconds = 10;

  ngOnDestroy(): void {
    this.clearTimer?.();
  }

  private clearTimer: VoidFunction | undefined;

  start() {
    this.countDown();
  }
  stop() {
    this.clearTimer?.();
  }

  private countDown() {
    this.clearTimer?.();
    const interval = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        this.message = 'Time is up!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);

    this.clearTimer = () => {
      clearInterval(interval);
    };
  }
}
