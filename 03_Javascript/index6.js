/** 1. for ans */

/**
 * for(변수 선언과 초기값 할당; 조건식(어디까지 증감); 증감식) {
 *      반복할 코드;
 * }
 * 
 */

for(let i = 0; i < 10; i++) {
    console.log('hi', i)
}

for(let i = 0; i < 10; i+=2) {
    console.log(`안녕하세요 ${i}`)
}

for(let i = 1; i < 6; i++) {
    console.log(i)
}
console.log("================")
for(let i = 5; i > 0; i--) {
    console.log(i)
}
console.log("================")
//1부터 N까지의 덧셈
let n = 11;
let sum = 0;
for(let i = 0; i < n+1; i++) {
    sum += i
}
console.log(sum)

console.log("================")
/** 배열과 함께 사용하는 for문 */
let fruits = ['사과', '망고', '오렌지' ,'망고스틴']
console.log(fruits.length); //배열의 길이 확인
for (let i = 1; i <= fruits.length; i++) {
    console.log('I like', fruits[i-1])
}
console.log("================")
let numsArr = [99, 99 ,98, 85, 77];
let sum2 = 0;
for (let i = 0; i < numsArr.length; i++) {
    sum2 += numsArr[i]
   
}
console.log(sum2)
console.log("================")

/** 2. while 문 */
/**
 * 초기화식;
 * while(조건식) {
 *      조건이 참일때 실행할 문장;
 *      증감식;
 * }
 */

let n2 = 1; // 초기화식
while(n2 <= 5) { //조건식
    console.log(n2) //실행문
    n2++; //증감식
}
console.log("================")
n2 = 10;
while(n2 > 0) {
    console.log(n2)
    n2--;
}
console.log("================")

//1~10 까지 짝수만 출력
n2 = 1;
while(n2 <= 10) {
    
    // n2 += 2;
    if(n2%2 === 0) {
        console.log(n2)
    }
    n2++;
}
console.log("================")

//10~1까지 감소하는데 홀수만 출력
n2 = 10;
while(n2 > 0) {
    
    // n2 += 2;
    if(n2%2 === 1) {
        console.log(n2)
    }
    n2--;
}
console.log("================")

//break문 사용해보기
let b = 0;
while(true) {
    console.log(b)
    b++; //증감식 위치 중요!
    if(b > 10) break;
}

console.log("================")
//continue 사용해보기
let sum3 = 0;
for(let i=0; i < 10; i++) {
    if(i%2 ===0) continue; //i가 짝수일때는 반복하지않고 다음 반복으로 넘김

    sum3 += i;
}
console.log(sum3)

//확인, 취소 할수 있음
// let n3 = 0;
// while(confirm('계속 진행할까요')) {
//     n3++;
//     alert(`${n3} 번째 alert창`)
// }
console.log("=========실습1=========")

//실습1
// let na = prompt('숫자입력')
// for (let i = 0 ; i <= na; i++) {
//     if(i%13 === 0 && i%2 ===1) {
//         console.log(i)
//     }
// }
console.log("=========실습2=========")

//실습2 
// for(let i=2; i<10;i++){
//     console.log(`---${i} 단---`)
//     for(let j=1;j<10;j++) {
//         console.log(`${i}x ${j} = ${i*j}`)
//     }
// }

console.log("=========실습3=========")
let sum4 = 0;

for (let i = 0; i <= 100; i++) {
    if(i%5 === 0 || i%2 === 0) {
        sum4 += i
    }
}
console.log(sum4)
