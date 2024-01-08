// 1. string (문자열)
/**
 * - 텍스트 정보
 * - 숫자, 특수문자 도 따옴표 안에 있으면 문자열
 * - 따옴표 안에 따옴표가 있다면!
 *      - "안에 '작은 따옴표'가 있어요
 *      - '안에 "큰 따옴표"가 있어요
 * 
 * 
 * 
 */

let myName = "보아";
let number1 = "123";
console.log(myName+number1)

// 2. number (숫자)
let number2 = 123
let opacity = 0.7
console.log(number2)
console.log(opacity)

// NaN (Not a Number)
console.log('alpha' - 3)

// 3. boolean
//true 나 false
let checked = true;
let isShow = false;

console.log(checked, isShow)


// 4. undefined
// 값도 없고 타입도 지정되어 있지 않은 상태
let undef;
console.log(undef)

let empty = null;
console.log(empty)

// 5. 배열(array)
let fruits = ["사과", "오렌지", "딸기"]
console.log(fruits[2])
console.log(fruits[1])
console.log(fruits[0])

let data = [22, "22", false]
console.log(data[0])
console.log(data[1])
console.log(data[2])

// 2차원 배열
const korean = [["가", "나", "다"], 
                ["라", "마", "바"], 
                ["사", "아", "자"]]
console.log(korean[0]) //배열 ["가", "나", "다"]
console.log(korean[0][2]) // "다"
 //실습
 const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];
console.log(letters[3][0],letters[1][3], letters[0][1], letters[0][3], letters[2][2])

// 3차원 배열
const nums = [
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
]
console.log(nums[1][0][1])

// object 오브젝트
/**
 * {}
 *   배열은 순서가 있는 반면, object는 키-값 형태로 저장
 * 테이터에 접근 시 key 이름을 이용해서 접근
 * {key:value, key1:value1}
 */

let cat = {
    name: "나비",
    age: 2,
    isCute: true,
    mew: function(){
        return "나옹"
    }
}
// 점 표기법
console.log(cat.name)
console.log(cat.age)
console.log(cat.isCute)
console.log(cat.mew())
cat.like = "tuna"
cat.age = 3
console.log(cat)

// 대괄호 표기법 - 키 값이 따옴표 안에 들어가야함
let dog ={
    name : "coco",
    isPoodle: true,
    age: 4,
    sibling:["max", "lucy"]
}
console.log(dog["name"])
console.log(dog["age"])
console.log(dog["isPoodle"])
console.log(dog["sibling"][1])

let introduce = {
    name:"boa",
    age:26
}
console.log(introduce)

// 자동형변환 (prompt의 입력값은 항상 string)
// let mathScore = prompt("수학 점수를 입력 하세요"); 
// let engScore = prompt("영어 점수를 입력 하세요");
// mathScore = Number(mathScore)
// engScore = Number(engScore)
// let avg = (mathScore + engScore) / 2;
// console.log(avg);


//typeof 로 데이터 타입 확인 가능
console.log(typeof "abcd")
console.log(typeof true)
console.log(typeof [])
console.log(typeof {})
console.log(typeof NaN)
console.log(typeof null)
console.log(typeof undefined)

// 형변환
// 1. ? >> string
console.log("==========================")
let str1 = true // boolean
let str2 = 123 // number
let str3 = null // null

console.log(String(str1))
console.log(String(str2))
console.log(String(str3))

console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))

// 2. ? >> number
let n1 = true;
let n2 = false;
let n3 = 123;
let n4 = "123.9";

console.log(Number(n1))
console.log(Number(n2))
console.log(Number(n3))
console.log(typeof Number(n4))
console.log(parseInt(n4)) //소수점은 버리고 정수형으로 변경

//실습

console.log(typeof 10 +" isn`t " + typeof "a" + " data type.")


