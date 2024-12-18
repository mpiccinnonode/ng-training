import {Component, computed, effect, untracked} from '@angular/core';
import {Customer} from "../../../models/person.model";
import {CustomerDetailsComponent} from "../customer-details/customer-details.component";
import {CustomersService} from "../../../services/customers.service";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CustomerDetailsComponent
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {

  customers = computed<Customer[]>(() => this.customersService.customers());

  itemsCounter = computed<number>(() => {
    const counters = this.customers().map(({itemsBoughtCounter}) => itemsBoughtCounter)
    return counters.reduce((prev, curr,) => prev + curr, 0);
  });

  itemsCounterDescription = computed<string>(() => {
    return this.itemsCounter().toString(10) + ' total items bought'
  })

  constructor(private customersService: CustomersService) {
    effect(() => {
      console.log(this.customers()?.length) // dependency
      untracked(() => {
        console.log(this.itemsCounter()); // non-dependency
      })
    });
  }

  addCustomer(): void {
    this.customersService.addCustomer();
  }

}
