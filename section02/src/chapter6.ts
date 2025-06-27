// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = "hello";
anyVar = () => {};
let num: number = 10;
num = anyVar;

// unknown
// any의 반대 (다 안됌)
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 타입을 정제하여 사용할 수 있다.
if (typeof unknownVar === "number") {
  num = unknownVar;
}
