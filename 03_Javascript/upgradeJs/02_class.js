//class : 오브젝트를 만들수 있는 틀
/**
 * 속성
 * - 만들어진 연도 year
 * - 집의 이름 name
 * - 창문의 갯수 window
 * 메소드
 * - 건물의 나이 출력 getAge()
 * - 창문의 갯수 출력 getWindow()
 * 
 */

class House{
    constructor(year, name, window) {
        this.year = year
        this.name = name
        this.window = window
    }

    //객체메소드
    getAge() {
        console.log(`건축한지 ${2024-this.year}년 되었어요`);
    }
    getWindow() {
        console.log(`${this.name}건물의 창문 갯수는 ${this.window}개 입니다.`);
    }
}

// const h1 = {
//     name: 'old',
//     year: 1789,
//     window: 1,
// }

const house1 = new House(1789, 'owl', 4)
house1.getAge()
house1.getWindow()
console.log(house1.name);

const house2 = new House(2015, '자이', 10)
house2.getAge()
house2.getWindow()
console.log(house2.name);

console.log('===============================');

// 상속
//extends 키워드를 사용해서 상속
//House 클래스의 함수의 속성을 사용할 수 있음
//House << Apartment
class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        super(year, name, window) //상속받는아이들 알려줌
        this.floor = floor
        this.windowMaker = windowMaker
    }

    getAptInfo() {
        return `${this.year}년에 지어진 ${this. name},
        총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`
    }
    //오버라이딩 overriding 
    // 부모 클래스의 메소드를 이름은 똑같이 쓰고 싶지만 내용은 다르게 만들고 싶을때, 메소드 재정의!!
    getWindow() {
        return `${this.name}건물의 창문은 ${this.windowMaker}에서 만들었습니다.`
    }

    //getAge() <= 상속받았기 때문에 사용가능

}
const apt1 = new Apartment(2022, "레미안", 20, 50, "kcc")
console.log(apt1.getWindow()); //오버라이딩 함수, 메소드 재정의
console.log('==========================');
console.log(apt1.getAptInfo()); //새로운 메소드 정의
apt1.getAge()
console.log(apt1);


console.log('==========실습 shape 클래스 만들기===========');

class Shape {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}
let rec1 = new Shape(3,4)
console.log(rec1.getArea());

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height)
    }
    //getArea() 상속받아서 사용가능
    getline() {
        return Math.sqrt(this.width**2 + this.height**2)
    }
}
let rec2 = new Rectangle(3,4)
console.log(rec2.getline());

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height)
    }
    getArea() {
        return (this.width * this.height)/2
    }
}
let tri1 = new Triangle(3,4)
console.log(tri1.getArea());

class Circle extends Shape {
    constructor(width, height, radius) {
        super(width, height)
        this.radius = radius
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let cir1 = new Circle(3,4,5)
console.log(cir1.getArea());