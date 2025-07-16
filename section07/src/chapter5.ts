// 프로미스
// const promise = new Promise(실행 함수); ①
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject("~때문에 실패");
  }, 2000);
});

promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// 프로미스를 반환하는 함수의 타입을 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

// 함수에 선언부분에 Post타입을 반환하는게 더 협업적으로 가독성이 좋음
function feachPost(): Promise<Post> {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목1",
        content: "게시글 컨텐츠1",
      });
    }, 2000);
  });
}

const postRequest = feachPost();

postRequest.then((post) => {
  post.id;
});
