import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule],
})
export class CardComponent {
  @Input()
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value || '<no name set>';
  }
  private _title!: string;
  @Input() description!: string;
  @Input() justify!: boolean;
}
