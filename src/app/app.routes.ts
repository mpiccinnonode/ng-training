import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employees.module').then((m) => m.EmployeesModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.routes').then((m) => m.CUSTOMERS_ROUTES),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.routes').then((m) => m.PRODUCTS_ROUTES),
  },
];
