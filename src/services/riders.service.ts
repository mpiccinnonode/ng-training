import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Rider } from "../models/riders.model";

@Injectable({
    providedIn: 'root',
  })
  export class RidersService {
    private _ridersSubject = new BehaviorSubject<Rider[]>([]);
  
    getRiders(): Observable<Rider[]> {
      return this._ridersSubject.asObservable();
    }
  
    addRider(rider: Rider): void {
        const currentRiders = this._ridersSubject.value;
        this._ridersSubject.next([...currentRiders, rider]);
      }
  }