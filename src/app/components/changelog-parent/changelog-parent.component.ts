import { Component } from '@angular/core';

@Component({
  selector: 'app-changelog-parent',
  templateUrl: './changelog-parent.component.html',
  styleUrls: ['./changelog-parent.component.css'],
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
