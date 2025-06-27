/**
 *  Unknown 타입
 */
// upcasting은 다 허용
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // upcasting 허용, downcasting X
  let unknownVar: unknown;
  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

/**
 *  Never 타입
 */
// 최하단 계층(공집합)
// 어떤 값도 저장 될 수 없다
// ex)
function neverExam() {
  function neverFunc(): never {
    while (true) {} //공집합(반환할게 없다)
  }
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

/**
 * Void 타입
 */

// void는 undefined의 superType이다.
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }
  let voidVar: void = undefined;
}

/**
 * any 타입
 */
// type 계층도를 무시하는 any 타입(never는 불가능)
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  //neverVar = anyVar;
}
