// 원시타입 5개

// number
let num1: number = 123;
let num2: number = -123;
let num3: number = Infinity;
let num4: number = NaN;

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;

// 임시로 null타입 넣을수 있음 tsconfig에서 설정
// "strictNullChecks": false (엄격한 null 검사)
// "strict"의 하위옵션
// let numA: number = null;
