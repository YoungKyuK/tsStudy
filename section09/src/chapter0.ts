// 조건부 타입

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// 제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

// 오버로딩 시그니쳐를 활용한 조건부타입
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}
let result = removeSpaces("hi im young");
result.toUpperCase();

let result2 = removeSpaces(undefined);
