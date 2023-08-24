import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class GroupComponentsComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() justify!: boolean;
}
