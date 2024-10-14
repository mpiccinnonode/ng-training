import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Beast } from '../../../models/beast.model';
import { BeastsService } from '../../../services/beasts.service';

@Component({
  selector: 'app-beasts',
  standalone: true,
  imports: [],
  templateUrl: './beasts.component.html',
  styleUrl: './beasts.component.scss',
})
export class BeastsComponent implements OnInit {
  beasts: Beast[] = [];

  constructor(
    private beastsService: BeastsService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData(): void {
    this.beastsService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => (this.beasts = res));
  }
}
