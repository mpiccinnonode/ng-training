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
  searchName: string = '';
  beastSpeciesOptions: string[] = [];
  beastSpeciesSelected: string = '';

  constructor(
    private beastsService: BeastsService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchData();
    this._getSpecies();
    console.log(this.beastSpeciesOptions);
  }

  //riassegno il valore della variabile in base al valore passato
  onSearchBeastName(searchName: string): void {
    this.searchName = searchName;
    //assegno all'array tutte le bestie che
    // includono nel nome la stringa che ho digitato
    this.filteredBeasts = this.beasts.filter((beast) =>
      beast.name.toLowerCase().includes(this.searchName.toLowerCase()),
    );
  }

  //Stesso approccio utilizzato per la searchbar
  onSelectOptionsBeastSpecies(beastSpeciesSelected: string){
    this.beastSpeciesSelected = beastSpeciesSelected;
    this.filteredBeasts = this.beasts;
    this.filteredBeasts = this.filteredBeasts.filter(items => items.species.includes(beastSpeciesSelected))
  }

  resetOccupations(){
    this.filteredBeasts = this.beasts;
  }

  private _getSpecies() {
    this.beastSpeciesOptions = this.beasts.map((items) => items.species);
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
