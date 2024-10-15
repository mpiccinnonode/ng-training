import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
})
export class SearchbarComponent {
  //Butt afuori un evento tipo string
  @Output() submit = new EventEmitter<string>();
  //La stringa che mi serve per la ricerca
  searchName: string = '';

  onSearchInput(event: Event): void {
    //Mi vado a prendere quello che digito nell'input
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
    //Assegnazione del valore digitato 
    this.searchName = inputElement.value;
  }
}
