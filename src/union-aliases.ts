type Combinable = number | string;
type ConversionDescription = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescription
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);
const combineNames = combine("Max", "Broker", "as-text");
console.log(combineNames);

type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!
console.log(u1);
function greet(user: User) {
  console.log("Hi, i am" + user.name);
}
const u2 = {
  age: 43,
  name: 34,
};
greet(u1);
////////////////
// type User = { name: string; age: number };

// function greet(user: User) {
//   console.log("Hi, I am " + user.name);
// }

// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }
