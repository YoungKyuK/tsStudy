// 첫번째 사례
// 여러개 타입 사용 가능
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 두번째 사례

// 첫번째 요소는 T이고, 나머지는 모를때 unknown 사용
// javascript의 ...rest와 같은 이치
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "hello", "mynameis"]);
// "hello"

// 세번째 사례

interface InterfaceA {
  lenth: number;
}

interface InterfaceB extends InterfaceA {}

// extends 해서 length를 가지고 있어야 한다.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(10);
