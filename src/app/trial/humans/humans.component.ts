import { Component, DestroyRef, OnInit } from '@angular/core';
import { HumansService } from '../../../services/humans.service';
import { Human } from '../../../models/human.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SearchbarComponent } from "../filters/searchbar/searchbar.component";

@Component({
  selector: 'app-humans',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './humans.component.html',
  styleUrl: './humans.component.scss',
})
export class HumansComponent implements OnInit {
  humans: Human[] = [];
  filteredHumans: Human[] = [];
  searchName: string = '';

  constructor(
    private humansService: HumansService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchData();
  }

  onSearchHumanName(searchName: string): void {
    this.searchName = searchName;
    this.filteredHumans = this.humans.filter(human => 
      human.name.toLowerCase().includes(this.searchName.toLowerCase())
    );
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
