import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Beast } from '../models/beast.model';
import { BEASTS } from '../constants/beasts.const';

@Injectable({
  providedIn: 'root',
})
export class BeastsService {
  private _beastsSubject = new BehaviorSubject<Beast[]>(BEASTS);

  getAll(): Observable<Beast[]> {
    return this._beastsSubject.asObservable();
  }

  delete(beastId: number): void {
    const currentBeasts = this._beastsSubject.getValue();
    const updatedBeasts = currentBeasts.filter((beast) => beast.id !== beastId);
    this._beastsSubject.next(updatedBeasts);
  }
}
