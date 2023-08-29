import { Component } from '@angular/core';
import { VoterComponent } from '../voter/voter.component';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css'],
  imports: [VoterComponent, CommonModule],
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Dr. IQ', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}
