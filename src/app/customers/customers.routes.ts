import {Routes} from "@angular/router";
import {CustomersComponent} from "./customers/customers.component";

export const CUSTOMERS_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('./customers/customers.component').then((m) => m.CustomersComponent)
}
]
