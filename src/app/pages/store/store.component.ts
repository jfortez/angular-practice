import { Component } from '@angular/core';
import { TitleComponent } from 'src/app/components/title/title.component';

@Component({
  selector: 'app-store',
  standalone: true,
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  imports: [TitleComponent],
})
export class StoreComponent {}
