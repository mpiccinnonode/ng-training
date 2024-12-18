import {Component, input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {PersonForm} from "./models/person-form.model";

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.scss',
})
export class PersonFormComponent {
  form = input.required<FormGroup<PersonForm>>();
}
