import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
}
