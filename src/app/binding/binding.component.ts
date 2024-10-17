import { Component, input } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss',
})
export class BindingComponent {
  pathParam = input.required<string>();
  queryParam1 = input.required<string>();
  queryParam2 = input.required<number>();
}
