import {Injectable, signal} from '@angular/core';
import {Customer} from "../models/person.model";
import {CUSTOMERS} from "../constants/customers.const";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customers = signal<Customer[]>(CUSTOMERS);

  constructor() {
  }

  addCustomer(): void {
    const customer: Customer = {
      name: 'Johnny',
      surname: 'Donut',
      age: 30,
      fiscalCode: 'JHNDNE80A01H501T',
      itemsBoughtCounter: 5
    }

    this.customers.update((value) => [...value, customer])

  }

}
