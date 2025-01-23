type Filter = {
  (array: number[], predicate: (item: number) => boolean): number[];
  (array: string[], predicate: (item: string) => boolean): string[];
  (array: object[], predicate: (item: object) => boolean): object[];
};

// Trying to create a simple implementation of JavaScript's own filter method
const filter = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
  let result: any[] = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};

let numbers = [1, 3, 4, 6, 9, 7, 10, 12];
// Predicate to filter all numbers greater than 7
function predicate(item: number) {
  return item > 7;
}

let animals = ["cat", "bat", "rat", "mat"];
// Predicate to filter all cats from animals array
function filterCats(item: string) {
  return item === "cat";
}

// Result of invoking the function
console.log(filter(numbers, predicate));
console.log(filter(animals, filterCats));

const myMap = function<T>(arr: T[], myFunction: (item: T) => T): T[] {
  
  const result:T[] = []
  for (const element of arr) {
    result.push(myFunction(element))
  }
  return result
}

function plusOne(num:number):number {
  return num + 1
}

function plusT(st:string):string {
  return st + "t"
}

console.log(myMap(numbers,plusOne))
console.log(myMap(animals,plusT))