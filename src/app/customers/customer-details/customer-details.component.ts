import {Component, Input} from '@angular/core';
import {Customer} from "../../../models/person.model";

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent {

  @Input({required: true}) customer!: Customer;
}
