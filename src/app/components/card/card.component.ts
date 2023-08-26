import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class GroupComponentsComponent {
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
