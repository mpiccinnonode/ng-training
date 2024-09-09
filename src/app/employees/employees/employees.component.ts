import { Component } from '@angular/core';
import {Employee} from "../../../models/person.model";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {

  employees: Employee[] = [
    {
      name: 'Pippo',
      surname: 'Baudo',
      age: 13,
      fiscalCode: 'BDPP13',
      employmentDate: new Date(),
      itemsSoldCounter: 5
    }
  ];
}
