import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { PersonForm } from '../../../../shared/person-form/models/person-form.model';

export interface ProductsForm {
  customerName: FormControl<string | null>;
  customerAge: FormControl<number | null>;
  customerData: FormGroup<PersonForm>;
  productNames: FormArray<FormControl<string | null>>;
}
