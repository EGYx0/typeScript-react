export interface IPerson {
  firstName: string;
  age: number;
  isMarried: boolean;
}

const userName = "Ahmed";
const age = 24;
const isStudent = false;

const skills: string[] = ["Coding", "Gym", "Watching movies"];
const scores: number[] = [1, 2, 3, 4, 5];

const theme: "light" | "dark" = "dark";

const user = {
  userName,
  age,
  isStudent,
};

function printUser(user: {
  userName: string;
  age: number;
  isStudent: boolean;
}): void {
  console.log(`${user.userName} is ${user.age} years old.`);
}

printUser(user);
