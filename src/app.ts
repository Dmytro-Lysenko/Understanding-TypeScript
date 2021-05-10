// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
/////
let adding: AddFn;
adding = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}
interface SecondName {
  readonly secondName?: string;
}

interface Greetable extends Named, SecondName {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  secondName?: string;
  age = 30;
  constructor(n?: string, secondName?: string) {
    if (n) {
      this.name = n;
      this.secondName = secondName;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}

let user1: Greetable;

user1 = new Person();
user1.greet("Hi there - I am");
console.log(user1);
