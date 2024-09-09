import { Component } from '@angular/core';
import {Customer} from "../../../models/person.model";
import {NgForOf} from "@angular/common";
import {CustomerDetailsComponent} from "../customer-details/customer-details.component";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    NgForOf,
    CustomerDetailsComponent
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  customers: Customer[] = [{
    name: 'Pippo',
    surname: 'Baudo',
    age: 13,
    fiscalCode: 'BDPP13',
    itemsBoughtCounter: 5
  }];

}
