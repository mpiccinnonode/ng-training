import {Routes} from "@angular/router";

export const PRODUCTS_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('../products/products-list/products-list.component').then((m) => m.ProductsListComponent),
}]
