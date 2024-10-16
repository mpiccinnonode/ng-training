import { Component, DestroyRef, OnInit } from '@angular/core';
import { HumansService } from '../../../services/humans.service';
import { Human } from '../../../models/human.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SearchbarComponent } from '../filters/searchbar/searchbar.component';
import { FilterAdvanceComponent } from '../filters/filter-advance/filter-advance.component';

@Component({
  selector: 'app-humans',
  standalone: true,
  imports: [SearchbarComponent, FilterAdvanceComponent],
  templateUrl: './humans.component.html',
  styleUrl: './humans.component.scss',
})
export class HumansComponent implements OnInit {
  humans: Human[] = [];
  filteredHumans: Human[] = [];
  humanOccupation: string[] = [];
  humanAges: number[] = []; 
  optionsAgeRanges = ['<20', '20-30', '30-40', '>40'];

  private _isAscendending: boolean = true;

  constructor(
    private humansService: HumansService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchData();
    this._getHumanOccupation();
  }

  onSearchHumanName(searchName: string): void {
    this.filteredHumans = this.humans.filter((human) =>
      human.name.toLowerCase().includes(searchName.toLowerCase()),
    );
  }

  onSelectOptionsOccupations(optionsOccupation: string) {
    this.filteredHumans = this.humans.filter((human) =>
      human.occupation.includes(optionsOccupation),
    );
  }

  onSelectOptionsAgeRenge(ageRange: string): void {
    this.filteredHumans = this.humans.filter((human) =>
      this._isWithinAgeRange(human.age, ageRange)
    );
  }

  resetFilter(): void {
    this.filteredHumans = this.humans;
  }

  sortByAge() {
    this.filteredHumans = this.humans.sort((a, b) => {
      if (this._isAscendending) {
        return a.age - b.age;
      } else {
        return b.age - a.age;
      }
    });

    this._isAscendending = !this._isAscendending;
  }


  private _isWithinAgeRange(age: number, range: string): boolean {
    switch (range) {
      case '<20':
        return age < 20;
      case '20-30':
        return age >= 20 && age <= 30;
      case '30-40':
        return age >= 30 && age <= 40;
      case '>40':
        return age > 40;
      default:
        return false;
    }
  }

  //Recupero tutte le occupazioni e le salvo nella variabile
  private _getHumanOccupation(): void {
    this.humanOccupation = this.humans.map((item) => item.occupation);
  }

  private _fetchData(): void {
    this.humansService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.humans = res;
        this.filteredHumans = res;
      });
  }
}
