interface IEmploy {
  firstName: string;
  lastName: string;
  salary: number;
  coWorkers?: string[];
}

const myProfil: IEmploy = {
  firstName: 'Elias',
  lastName: 'Bracaval',
  salary: 525,
}