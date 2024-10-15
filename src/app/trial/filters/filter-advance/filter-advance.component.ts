import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-advance',
  standalone: true,
  imports: [],
  templateUrl: './filter-advance.component.html',
  styleUrl: './filter-advance.component.scss',
})
export class FilterAdvanceComponent {
  @Output() submit = new EventEmitter<string>();
  @Input() options: string[] = [];

  onOptionSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    console.log(selectElement.value);
    this.submit.emit(selectElement.value);
  }
}
