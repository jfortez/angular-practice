import { Component } from '@angular/core';
import { ChangelogChildComponent } from '../changelog-child/changelog-child.component';

@Component({
  standalone: true,
  selector: 'app-changelog-parent',
  templateUrl: './changelog-parent.component.html',
  styleUrls: ['./changelog-parent.component.css'],
  imports: [ChangelogChildComponent],
})
export class ChangelogParentComponent {
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
