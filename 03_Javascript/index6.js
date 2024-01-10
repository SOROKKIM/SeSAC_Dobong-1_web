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
