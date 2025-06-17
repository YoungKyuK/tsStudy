// object
// 객체 리터럴 타입
// 구조적 타입시스템 <-> 명목적 타입 시스템(c, java)

// ? = 있어도되고, 없어도된다.(선택적 프로퍼티)
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "김영규",
};

// user = {
//   name: "홍길동",
// };

let config: {
  readonly apikey: string;
} = {
  apikey: "MY API KEY",
};

// config.apikey = "hacked";
