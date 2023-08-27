import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random-color-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-color-text.component.html',
  styleUrls: ['./random-color-text.component.css'],
})
export class RandomColorTextComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() letter!: string;
  // palette: string[] = [
  //   'slate',
  //   'gray',
  //   'zinc',
  //   'neutral',
  //   'stone',
  //   'red',
  //   'orange',
  //   'amber',
  //   'yellow',
  //   'lime',
  //   'green',
  //   'emerald',
  //   'teal',
  //   'cyan',
  //   'sky',
  //   'blue',
  //   'indigo',
  //   'violet',
  //   'purple',
  //   'fuchsia',
  //   'pink',
  //   'rose',
  // ];
  // scales: string[] = [
  //   '50',
  //   '100',
  //   '200',
  //   '300',
  //   '400',
  //   '500',
  //   '600',
  //   '700',
  //   '800',
  //   '900',
  //   '950',
  // ];
  color = this.generateRandomColor();

  constructor(private cd: ChangeDetectorRef) {}

  generateRandomColor(): string {
    // const color =
    //   this.palette[Math.floor(Math.random() * this.palette.length)] +
    //   '-' +
    //   this.scales[Math.floor(Math.random() * this.scales.length)];
    // return `text-${color}`;
    const hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hexColor}`;
  }

  private clearTimer: VoidFunction | undefined;

  generate() {
    this.clearTimer?.();
    const interval = setInterval(() => {
      this.color = this.generateRandomColor();
    }, 1000);
    this.clearTimer = () => clearInterval(interval);
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.generate();
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.clearTimer) {
      this.clearTimer();
    }
  }
}
