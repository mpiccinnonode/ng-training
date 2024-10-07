import { Component } from '@angular/core';
import { PRODUCTS } from '../consts/products.const';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  products = PRODUCTS;
}
