import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Beast } from '../../../models/beast.model';
import { BeastsService } from '../../../services/beasts.service';
import { SearchbarComponent } from "../filters/searchbar/searchbar.component";

@Component({
  selector: 'app-beasts',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './beasts.component.html',
  styleUrl: './beasts.component.scss',
})
export class BeastsComponent implements OnInit {
  beasts: Beast[] = [];
  //nuova variabile dove salvo gli elementi filtrati
  filteredBeasts: Beast[] = [];
  searchName: string = '';

  constructor(
    private beastsService: BeastsService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchData();
  }

  //riassegno il valore della variabile in base al valore passato
  onSearchBeastName(searchName: string): void {
    this.searchName = searchName;
    //assegno all'array tutte le bestie che
    // includono nel nome la stringa che ho digitato
    this.filteredBeasts = this.beasts.filter(beast => 
      beast.name.toLowerCase().includes(this.searchName.toLowerCase())
    );
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
