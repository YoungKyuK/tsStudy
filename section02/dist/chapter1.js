// 원시타입 5개
// number
let num1 = 123;
let num2 = -123;
let num3 = Infinity;
let num4 = NaN;
// string
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${num1}`;
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let unde1 = undefined;
// 리터럴 타입
// 리터럴 -> 값
let numA = 10;
let strA = "hello";
let boolA = true;
export {};
// 임시로 null타입 넣을수 있음 tsconfig에서 설정
// "strictNullChecks": false (엄격한 null 검사)
// "strict"의 하위옵션
// let numA: number = null;
