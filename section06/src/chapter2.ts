// 접근 제어자
// access modifier
// => public, private, proteced

class Employee {
  // 필드

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

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

  // 메서드
  func() {
    this.age;
    //this.name;
  }
}

const employee = new Employee("영규", 32, "developer");
//employee.name = "홍길동";
//employee.age = 20;
employee.position = "건물주";

console.log(employee);
