function printSome<T>(x: T, y: T): T {
  console.log(x);
  console.log(y);
  return y;
}
printSome<number>(1, 2);
printSome<string>("hi", "hello");

function printSome2<T, K>(x: T, y: K): void {
  console.log(x);
  console.log(y);
}
printSome2<number, string>(1, "안녕하세요");

function arrLength(arr: any[]): number {
  return arr.length;
}

function getValue1(value: any): any {
  return value;
}

function getValue2<T>(value: T): T {
  return value;
}
console.log(getValue2<any>("hi"));

function arrLength2<T>(arr: T[]) {
  return arr.length;
}

function getValue3<T>(value: T): T {
  return value;
}

console.log(arrLength2<number>([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(getValue3<number[]>([1, 2, 3, 4, 5, 6, 7, 8]));

// 실습 3
function arrElement<T>(arr: T[], idx: number): T | false {
  if (idx >= arr.length) {
    return false;
  }
  return arr[idx];
}
console.log(arrElement<string>(["a"], 2)); // 출력: false

// #### interface & generic
interface Phone<T> {
  company: string;
  createdAt: Date;
  option: T;
}
//T 타입으로 string을 사용
const iphone15: Phone<string> = {
  company: "apple",
  createdAt: new Date("2023-10-13"),
  option: "black",
};

// T타입으로 객체 타입 적용
type iphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<iphoneOption> = {
  company: "apple",
  createdAt: new Date("2024-10-06"),
  option: {
    color: "silver",
    storage: 256,
  },
};

console.log("=============");
console.log(iphone15);
console.log(iphone16);

//타입 스크립트는 초기화된 값을 바탕으로 타입을 자동추론함
let aa = 1;
let bb = "string";
let cc = true;

// aa = "안녕하세요"; // 불가능(aa가 number형으로 자동추론됨)
