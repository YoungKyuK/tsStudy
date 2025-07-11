//  클래스

let studentA = {
  name: "영규",
  grade: "A+",
  age: 27,
  study() {
    console.log("열공");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열공");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programing() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("영규", "B+", 32, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programing();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// let studentB = new Student("영규", "A+", 27);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
