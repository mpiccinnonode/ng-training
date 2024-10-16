import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-advance',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-advance.component.html',
  styleUrl: './filter-advance.component.scss',
})
export class FilterAdvanceComponent {
  @Output() submit = new EventEmitter<string>();
  @Output() submitRange = new EventEmitter<string>();
  @Input() options: string[] = [];
  @Input() rangeOptions: string[] = [];

  selectedOption: string = '';
  selectedRange: string = '';
}
