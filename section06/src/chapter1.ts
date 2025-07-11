// 타입스크립트의 클래스

const employee = {
  name: "영규",
  age: 32,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자 (모든변수 초기화)
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    // 상속된 매개변수
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("영규", 27, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
