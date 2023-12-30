let total: number = 100;
// let name: string = "Alex";
let isActive: boolean = false;

// name = "5";
const numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

const user: { name: string; age: number } = {
  name: "Alex",
  age: 18,
};

type userData = {
  name: string;
  phoneNumber: number;
  email: string;
};

const data: userData = {
  name: "John Doe",
  phoneNumber: 1234567890,
  email: "john@doe.com",
};
