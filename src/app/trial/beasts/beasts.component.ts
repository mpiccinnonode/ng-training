import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Beast } from '../../../models/beast.model';
import { BeastsService } from '../../../services/beasts.service';
import { SearchbarComponent } from '../filters/searchbar/searchbar.component';
import { FilterAdvanceComponent } from '../filters/filter-advance/filter-advance.component';

@Component({
  selector: 'app-beasts',
  standalone: true,
  imports: [SearchbarComponent, FilterAdvanceComponent],
  templateUrl: './beasts.component.html',
  styleUrl: './beasts.component.scss',
})
export class BeastsComponent implements OnInit {
  beasts: Beast[] = [];
  //nuova variabile dove salvo gli elementi filtrati
  filteredBeasts: Beast[] = [];
  optionsbeastSpecies: string[] = [];
  optionsRangeSize = ['<5', '5-10', '10-15', '>15'];

  private _isAscendening: boolean = true;

  constructor(
    private beastsService: BeastsService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchData();
    this._getSpecies();
  }

  onSearchBeastName(searchName: string): void {
    //assegno all'array tutte le bestie che
    // includono nel nome la stringa che ho digitato
    this.filteredBeasts = this.beasts.filter((beast) =>
      beast.name.toLowerCase().includes(searchName.toLowerCase()),
    );
  }

  onSelectOptionsBeastSpecies(beastSpeciesSelected: string): void {
    this.filteredBeasts = this.beasts.filter((items) =>
      items.species.includes(beastSpeciesSelected),
    );
  }

  onSelectOptionsRangeLength(lengthRange: string): void {
    this.filteredBeasts = this.beasts.filter((beast) =>
      this._isWithinSizeRange(beast.size.length, lengthRange),
    );
  }

  resetBeast(): void {
    this.filteredBeasts = this.beasts;
  }

  sortByWeight(): void {
    this.filteredBeasts = this.beasts.sort((a, b) => {
      if (this._isAscendening) {
        return a.size.weight - b.size.weight;
      } else {
        return b.size.weight - a.size.weight;
      }
    });
    this._isAscendening = !this._isAscendening;
  }

  private _isWithinSizeRange(length: number, range: string): boolean {
    switch (range) {
      case '<5':
        return length < 5;
      case '5-10':
        return length >= 5 && length <= 10;
      case '10-15':
        return length >= 10 && length <= 15;
      case '>15':
        return length > 15;
      default:
        return false;
    }
  }

  private _getSpecies(): void {
    this.optionsbeastSpecies = this.beasts.map((items) => items.species);
  }

  private _fetchData(): void {
    this.beastsService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.beasts = res;
        this.filteredBeasts = res;
      });
  }
}
