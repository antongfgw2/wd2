//copy by value and copy by reference

// let a = 10;
// b = a;
// a = 20;

// console.log(a);
// console.log(b);

// const a = [1, 2, 3, 4, 5];
// b = a;
// a.push(6);

// console.log(a);
// console.log(b);

const user1 = {
  name: "Jason",
  age: 21,
  print() {
    console.log(this.name + " is of age " + this.age);
  },
};
// // spread operator - ...

// const user2 = { ...user1 };

// user2.age = 23;

// console.log(user1);
// console.log(user2);

// user1.print();

// js destructuring

const { name: fullName } = user1;

console.log(fullName);

console.log(user1.name);

const arr = [
  ["Apple", "Orange"],
  [1, 2, 3, 4, 5],
];

const [fruits, num] = arr;

console.log(fruits);
console.log(num);
