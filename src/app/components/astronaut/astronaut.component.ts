import { Component, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  standalone: true,
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css'],
})
export class AstronautComponent implements OnDestroy {
  @Input() astronaut = '';
  mission = 'no mission';
  confirmed = false;
  announced = false;
  subscription!: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      (mission) => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
