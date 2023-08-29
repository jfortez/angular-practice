import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent {
  routes: { name: string; path: string }[] = [
    { name: 'Samples', path: 'samples' },
    { name: 'Store', path: 'store' },
    { name: 'Crud', path: 'crud' },
  ];
}
