interface Person {
  name: string;
  surname: string;
  age: number;
  fiscalCode: string;
}

export interface Employee extends Person{
  employmentDate: Date;
  itemsSoldCounter: number;
}


export interface Customer extends Person{
  itemsBoughtCounter: number;
}
