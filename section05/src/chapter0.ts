// 인터페이스

// 인터페이스 그 자체에는 |, & 불가
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// type Type1 = number | string | Person;
// type Type2 = number & string & Person;

const person: Person = {
  name: "이정환",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
