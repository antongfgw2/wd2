// let user1 = {
//   name: "Kevin",
//   age: 27,
//   email: "kevin@gmail.com",
// };

// class User {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }

//   print() {
//     console.log(`${this.name} is of age ${this.age}`);
//   }
// }

// const user2 = new User("Jason", 26, "jason@gmail.com");
// const user3 = new User("Ben", 23, "ben@gmail.com");

// user2.print();
// user3.print();

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

User.prototype.print = function () {
  console.log(`${this.name} is of age ${this.age}`);
};

const user2 = new User("Jason", 26, "jason@gmail.com");
const user3 = new User("Ben", 23, "ben@gmail.com");

user2.print();
user3.print();

// arrow functions

// const greet = () => {
//   console.log("Hello!!");
// };

// greet();
