import { Component, DestroyRef, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductsForm } from './models/products-form.model';
import { PersonForm } from '../../../shared/person-form/models/person-form.model';
import { PersonFormStore } from '../../../shared/person-form/store/person-form.store';
import { PersonFormComponent } from '../../../shared/person-form/person-form.component';

@Component({
  selector: 'app-multiple-products-form',
  standalone: true,
  imports: [ReactiveFormsModule, PersonFormComponent],
  templateUrl: './multiple-products-form.component.html',
  styleUrl: './multiple-products-form.component.scss',
})
export class MultipleProductsFormComponent implements OnInit {
  // nome cliente
  // array nomi prodotti
  personForm!: FormGroup<PersonForm>;
  private _form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private destroyRef: DestroyRef,
    private personFormStore: PersonFormStore,
  ) {}

  get form(): FormGroup<ProductsForm> {
    return this._form;
  }

  set form(value: FormGroup<ProductsForm>) {
    this._form = value;
  }

  get productNamesFormArray(): FormArray {
    return this._form.get('productNames') as FormArray;
  }

  get customerDataSubForm(): FormGroup<PersonForm> {
    return this._form.get('customerData') as FormGroup<PersonForm>;
  }

  get customerNameControl(): FormControl {
    return this._form.get('customerName') as FormControl;
  }

  get customerAgeControl(): FormControl {
    return this._form.get('customerAge') as FormControl;
  }

  ngOnInit(): void {
    this.personForm = this.personFormStore.initPersonForm();
    this.form = this.fb.group<ProductsForm>({
      customerName: this.fb.control<string>('', Validators.required),
      customerAge: this.fb.control<number>({ value: 0, disabled: true }), // attivo solo se customerName valorizzato
      productNames: this.fb.array<FormControl<string | null>>([]),
      customerData: this.personFormStore.initPersonForm(),
    });
    this._manageDependency();
  }

  submitForm(): void {
    console.log(this.form.value);
  }

  addProductName(): void {
    this.productNamesFormArray.push(this.fb.control('', Validators.required));
  }

  removeProduct(index: number): void {
    this.productNamesFormArray.removeAt(index);
  }

  private _manageDependency(): void {
    this.customerNameControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value: string) => {
        if (value) {
          this.customerAgeControl.enable();
          this.customerAgeControl.markAsTouched();
          this.customerAgeControl.markAsDirty();
          this.customerAgeControl.updateValueAndValidity();
        } else {
          this.customerAgeControl.disable();
        }
      });
  }
}
