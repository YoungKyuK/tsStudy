// 인덱스드 액세스 타입

// 복잡한 코드에서 특정 프로퍼티의 타입을 뽑아서 변수의 저장 하는 기능
// interface : 객체 프로퍼티 유효
// type : 배열타입에 유효
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// author: Post["author"] : type만 명시 가능
// author: Post["author"]["id"] : id만 가지고옴
// uthor: PostList[number]["author"] : 배열은 numbertype 추출후에 객체 사용
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// PostList[number] : number 타입으로 넣으면 요소 추출 가능
const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "영규",
    age: 32,
  },
};

printAuthorInfo(post.author);

// 튜플타입 : 길이가 고정된 배열
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type TupNum = Tup[number];
