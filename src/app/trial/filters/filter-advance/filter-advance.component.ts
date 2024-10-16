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
  @Output() submitRange = new EventEmitter<string>();
  @Input() options: string[] = [];
  @Input() rangeOptions: (string | number | boolean)[] = [];

  selectedOption: string = '';
  selectedRange: string = '';

  onOptionSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption = selectElement.value;
    this.submit.emit(this.selectedOption)
  }

  onRangeSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedRange = selectElement.value;
    this.submitRange.emit(this.selectedRange);
  }

}
