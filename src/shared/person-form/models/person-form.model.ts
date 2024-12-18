import { FormControl } from '@angular/forms';

export interface PersonForm {
  name: FormControl<string | null>;
  surname: FormControl<string | null>;
  age: FormControl<number | null>;
  emailAddress: FormControl<string | null>;
}
