import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HUMANS } from '../constants/humans.const';
import { Human } from '../models/human.model';

@Injectable({
  providedIn: 'root',
})
export class HumansService {
  private _humansSubject = new BehaviorSubject<Human[]>(HUMANS);

  getAll(): Observable<Human[]> {
    return this._humansSubject.asObservable();
  }

  delete(humandId: number): Observable<Human[]> {
    const currentHumans = this._humansSubject.getValue();
    const updatedHumans = currentHumans.filter(
      (human) => human.id !== humandId,
    );
    this._humansSubject.next(updatedHumans);
    return of();
  }
}
