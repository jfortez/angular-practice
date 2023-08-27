import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomColorTextComponent } from 'src/app/components/random-color-text/random-color-text.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RandomColorTextComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  word = 'Random';
}
