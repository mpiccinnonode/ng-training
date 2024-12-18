import { FormArray, FormControl } from '@angular/forms';

export interface ProductsForm {
  customerName: FormControl<string | null>;
  customerAge: FormControl<number | null>;
  productNames: FormArray<FormControl<string | null>>;
}
