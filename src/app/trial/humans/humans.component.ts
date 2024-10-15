import { Component, DestroyRef, OnInit } from '@angular/core';
import { HumansService } from '../../../services/humans.service';
import { Human } from '../../../models/human.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SearchbarComponent } from "../filters/searchbar/searchbar.component";
import { FilterAdvanceComponent } from "../filters/filter-advance/filter-advance.component";

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
  searchName: string = '';
  optionsOccupation: string='';

  constructor(
    private humansService: HumansService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchData();
    this._getHumanOccupation();
    console.log(this.humanOccupation);
    
  }

  onSearchHumanName(searchName: string): void {
    this.searchName = searchName;
    this.filteredHumans = this.humans.filter(human => 
      human.name.toLowerCase().includes(this.searchName.toLowerCase())
    );
  }

  onSelectOptionsOccupations(optionsOccupation: string){
    this.optionsOccupation = optionsOccupation;
    this.filteredHumans = this.humans;
    this.filteredHumans = this.filteredHumans.filter(human => human.occupation.includes(optionsOccupation))
  }

  resetFilter(){
    this.filteredHumans = this.humans;
  }

  //Recupero tutte le occupazioni e le salvo nella variabile
  private _getHumanOccupation(): void {
    this.humanOccupation = this.humans.map((item) => item.occupation)
  }

  private _fetchData(): void {
    this.humansService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.humans = res;
        this.filteredHumans = res;
        this._getHumanOccupation();
      });
  }
}
