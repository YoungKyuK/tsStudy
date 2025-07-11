// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
// CheckList
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준 1. 반환값이 호환되는가

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
//b = a; 다운캐스팅이라 오류

// 기준 2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

//  아래 객체가 예시) 객체는 SuperType의 객체프로퍼티가 더 적음(공통속성)
// 그래서 SuperType이 SubType으로 다운캐스팅이 허용 됌.(Super에는 없고, Sub에는 해당 프로퍼티가  있으니까)
// 그러한 이유로 매개변수의 형식에 따라 업캐스팅이라 오류

// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 2.2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
// 매개변수가 더 적을 때에만 호환이 된다. 이유는 선언부에 1개가 선언되어서 2개를 못 넣는다.
