import { Component, DestroyRef, OnInit } from '@angular/core';
import { HumansService } from '../../../services/humans.service';
import { Human } from '../../../models/human.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-humans',
  standalone: true,
  imports: [],
  templateUrl: './humans.component.html',
  styleUrl: './humans.component.scss',
})
export class HumansComponent implements OnInit {
  humans: Human[] = [];

  constructor(
    private humansService: HumansService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData(): void {
    this.humansService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => (this.humans = res));
  }
}
