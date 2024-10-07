import { Price } from './price.model';
import { Category } from './category.model';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: Price;
  category: Category;
}
