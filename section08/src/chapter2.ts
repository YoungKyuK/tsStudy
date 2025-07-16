// keyof 연산자
// keyof : key의 유니온 타입 다 가지고옴
// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "김영규",
  age: 32,
};

getPropertyKey(person, "name");
