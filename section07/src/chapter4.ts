// 제네릭 클래스

class List<T> {
  constructor(private list: T[]) {} // 2

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// number라고 지정해주지 않아도 매개변수 보고 제네릭 타입을 추론함
const numberList = new List<number>([1, 2, 3]); // 1
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("hello");
stringList.print();
