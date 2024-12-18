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

@Component({
  selector: 'app-multiple-products-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './multiple-products-form.component.html',
  styleUrl: './multiple-products-form.component.scss',
})
export class MultipleProductsFormComponent implements OnInit {
  // nome cliente
  // array nomi prodotti

  private _form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private destroyRef: DestroyRef,
  ) {}

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

  get productNamesFormArray(): FormArray {
    return this._form.get('productNames') as FormArray;
  }

  get customerNameControl(): FormControl {
    return this._form.get('customerName') as FormControl;
  }

  get customerAgeControl(): FormControl {
    return this._form.get('customerAge') as FormControl;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      customerName: this.fb.control('', Validators.required),
      customerAge: this.fb.control({ value: 0, disabled: true }), // attivo solo se customerName valorizzato
      productNames: this.fb.array([]),
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
