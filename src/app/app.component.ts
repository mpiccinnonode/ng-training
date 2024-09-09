import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Employee} from "../models/person.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-training';

  constructor() {
  }
}
