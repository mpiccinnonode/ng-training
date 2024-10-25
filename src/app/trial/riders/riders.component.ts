import { Component, DestroyRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Human } from '../../../models/human.model';
import { Beast } from '../../../models/beast.model';
import { HumansService } from '../../../services/humans.service';
import { BeastsService } from '../../../services/beasts.service';
import { RidersService } from '../../../services/riders.service';
import { Rider } from '../../../models/riders.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-riders',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './riders.component.html',
  styleUrl: './riders.component.scss',
})
export class RidersComponent {
  humans: Human[] = [];
  beasts: Beast[] = [];
  riders: Rider[] = [];

  selectedHuman: Human | null = null;
  selectedBeast: Beast | null = null;

  constructor(
    private humansService: HumansService,
    private beastsService: BeastsService,
    private ridersService: RidersService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchBeasts();
    this._fetchHumans();
    this._fetchRiders();
  }

  addRider(): void {
    if (this.selectedHuman && this.selectedBeast) {
      const newRider: Rider = {
        human: this.selectedHuman,
        beast: this.selectedBeast,
      };
      this.ridersService.addRider(newRider);
      this.selectedHuman = null;
      this.selectedBeast = null;
    }
  }

  private _fetchRiders(): void {
    this.ridersService
      .getRiders()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((riders) => {
        this.riders = riders;
      });
  }

  private _fetchHumans(): void {
    this.humansService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.humans = res;
      });
  }

  private _fetchBeasts(): void {
    this.beastsService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.beasts = res;
      });
  }
}
