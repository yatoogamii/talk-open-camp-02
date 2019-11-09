// string
const prenom: string = 'Elias';
// number
const age: number = 20;
// boolean
const human: boolean = true;
// object 
const infos: object = {} || [] || function () { };
// null and undefined
const empty: null = null;
const yourVariable: undefined = undefined;
// any
const anything: any = ['toto', true, 15, {}, []];

// array
const friends: string[] = ['Tom', 'Amy', 'Michel'];
const FavNumbers: Array<number> = [7, 22, 12];
// tuple
const myData: [string, number, string] = ['Elias', 19, 'developper'];
// enum string
enum allColors {
  color1 = 'Red',
  color2 = 'Green',
  color3 = 'Blue'
};
const myColors: allColors = allColors.color1; // red

// enum number
enum answers {
  yes,
  no
};
const myAnswer: answers = answers.yes // 1