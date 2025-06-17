// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "김영규",
  nickname: "young",
  birth: "1993.02.07",
  bio: "안녕하세요",
  location: "의정부시",
};

let user2: User = {
  id: 2,
  name: "김영규",
  nickname: "young",
  birth: "1993.02.07",
  bio: "안녕하세요",
  location: "의정부시",
};

// 인덱스 시그니처
// key value의 type을 정해줌
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  Japan: "jp",
};

type CountryNumberCodes = {
  [key: string]: number;
  // 기본값을 넣어주면 좋다. 안 넣어주면 빈 객체로 할당
  Korea: number;
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 420,
};
