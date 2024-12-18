import { Routes } from '@angular/router';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        '../products/multiple-products-form/multiple-products-form.component'
      ).then((m) => m.MultipleProductsFormComponent),
  },
];
