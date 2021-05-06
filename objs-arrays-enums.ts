// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Dmytro",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTH0R = 2;
enum Role {
  ADMIN,
  READ_ONLY = 20,
  AUTHOR,
}

const person = {
  name: "Dmytro",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
// person.role.push("admin");
// person.role[1] = 10;
let favoriteAcrivites: string[];
favoriteAcrivites = ["String"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map());
}
if (person.role === Role.AUTHOR) {
  console.log("is author");
}
