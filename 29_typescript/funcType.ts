function print(a: number, b: number, c: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}
print(1, 2, 3);
// print(1, 2, 3, 4); // error
// print(1, 2); // error
function print2(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}
print2(1, 2, 3);
print2(1, 2);

//void 타입
function sayHello(): void {
  console.log("hello");
}
sayHello();

//string return
function concatStr(a: string, b: number): string {
  return a + b;
}
console.log(concatStr("hi", 7777));

// 원의 넓이를 구하는 함수
function circleArea(r: number) {
  return r * r * Math.PI;
}
console.log(circleArea(5));

// 함수 표현식
const triangleArea = (w: number, h: number): number => (w * h) / 2;
console.log("삼각형의 넓이", triangleArea(2, 4));

interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}
const jh: Greet = {
  name: "allie",
  hi() {
    return "안녕 내 이름은 " + this.name + "이야";
  },
  bye(a: number) {
    return `작별인사를 ${a}번 했습니다.`;
  },
};

console.log(jh.hi());
console.log(jh.bye(5));

// never type - 조건이 없을때 영원히 빠져나올 수 없는 함수
// 항상 함수의 끝에 절대 도달하지 않는 경우에만 Never 타입 할당 가능
function goingOn(a: number): never {
  while (true) {
    console.log("끝나지 않는 함수입니다.");
    // if (a > 10) break; // 특정 조건일 때 빠져나올 수 있으면 never 타입 사용 불가
  }
}

// goingOn();

// 숫자가 오면 더하기
// 문자가 오면 문자 이어주기
// function addSomething(x: string | number, y: string | number): string | number {
//   return x + y;
// }

// 오버로딩, 오버라이딩
/**
 * - 오버라이딩 :  클래스에서 상속했을때, 메소드 재정의
 * - 오버로딩 : 함수에서 매개변수의 개수나 타입, 함수의 타입이 다를 때
 *            같은 이름으로 매개변수의 종류와 개수를 다르게 선언할 수 있음.
 *            함수의 이름을 똑같이 사용하기 때문에 비슷한 기능일때만 사용할 수 있음
 */
// 오버로딩
function addSomething(x: string, y: string): string;
function addSomething(x: number, y: number): number;
function addSomething(x: any, y: any) {
  return x + y;
}

addSomething(1, 1); //2
addSomething("안녕", "하세요"); // "안녕하세요"
console.log(addSomething(1, 1));
console.log(addSomething("안녕", "하세요"));

// addSomething(1,"2"); 이런경우는 안됌

// 실습1
function sum1(a: number, b: number): void {
  console.log(a + b);
}
sum1(5, 11);

// 실습 2
function sum2(...numbers: number[]): number {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum2(1, 2, 3, 4, 10));

//리더님 해답
function sum3(...numbers: number[]): number {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
}
console.log(sum3(1, 2, 3, 4, 10));
