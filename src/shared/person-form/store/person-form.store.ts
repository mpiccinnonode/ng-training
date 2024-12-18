import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonForm } from '../models/person-form.model';

@Injectable({ providedIn: 'root' })
export class PersonFormStore {
  constructor(private fb: FormBuilder) {}

  initPersonForm(
    value?: FormGroup<PersonForm>['value'],
  ): FormGroup<PersonForm> {
    return this.fb.group<PersonForm>({
      name: this.fb.control<string | null>(
        value?.name ?? null,
        Validators.required,
      ),
      surname: this.fb.control<string | null>(
        value?.surname ?? null,
        Validators.required,
      ),
      age: this.fb.control<number | null>(
        value?.age ?? null,
        Validators.required,
      ),
      emailAddress: this.fb.control<string | null>(
        value?.emailAddress ?? null,
        [Validators.required, Validators.email],
      ),
    });
  }
}
