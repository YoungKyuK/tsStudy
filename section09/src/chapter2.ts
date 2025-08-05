// infer
// inference -> 추론하다
// infer R = 조건식이 참이라 판단하는 R타입
type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>; // 추론을 거치지 않아서 거짓판정 => never

// 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 요구사항
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
