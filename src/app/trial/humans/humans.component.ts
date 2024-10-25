import { Component, DestroyRef, OnInit } from '@angular/core';
import { HumansService } from '../../../services/humans.service';
import { Address, Human } from '../../../models/human.model';
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
  addressList: Address[] = [];
  humanOccupation: string[] = [];
  humanAges: number[] = [];
  optionsAgeRanges = ['<20', '20-30', '30-40', '>40'];

  private _isAscendending: boolean = true;
  private _originalAge: number[] = [];

  constructor(
    private humansService: HumansService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchData();
    this._getHumanOccupation();
    this._getAddressHumanOrderAlphabeticalState();
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
      this._isWithinAgeRange(human.age, ageRange),
    );
  }

  resetFilter(): void {
    this.filteredHumans = this.humans;
  }

  sortByAge(): void {
    this.filteredHumans = this.humans.sort((a, b) => {
      if (this._isAscendending) {
        return a.age - b.age;
      } else {
        return b.age - a.age;
      }
    });

    this._isAscendending = !this._isAscendending;
  }

  addFiveAge(human: Human): void {
    human.age + 5 > 100 ? human.age = 100 : human.age +=5;
  }

  remuveFiveAge(human: Human): void {
    human.age -5 < 0 ? human.age = 0 : human.age -= 5;
  }

  resetAllAge(): void {
    this.humans.forEach((human, index) => {
      human.age = this._originalAge[index];
    });
  }

  delete(human: Human): void {
    this.humansService.delete(human.id).subscribe(() => {
      this._fetchData();
    });
  }

  private _getAddressHumanOrderAlphabeticalState(): void {
    this.addressList = this.humans.map((items) => items.address);
    this.addressList.sort((a, b) => a.state.localeCompare(b.state));
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
        this._originalAge = this.humans.map((item) => item.age);
        this.filteredHumans = res;
      });
  }
}
