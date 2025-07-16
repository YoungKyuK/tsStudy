// map 메서드

// Map은 다음과 같이 원본 배열의 각 요소에 콜백함수를 수행하고 반환된 값들을 모아 새로운 배열로 만들어 반환합니다.
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2,4,6]

// swap함수 : 2개의 type 변수를 사용
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => parseInt(it));

// forEach
//forEach 메서드는 다음 매개변수(parameter)와 함께 배열의 각 요소에 적용하게 될 콜백 함수(callback function)를 전달합니다.
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr2: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr2.length; i++) {
    callback(arr2[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  it;
});
