let product, price;
function goMart() {
  console.log("마트에 들어가서 음료 고민중");
}

function pickDrink(callback) {
  //3초동안 음료 선택 고민
  setTimeout(() => {
    console.log("고민 끝");
    product = "제로콜라";
    price = 2000;
    callback();
  }, 3000);
}

function pay() {
  console.log(`상품명 : ${product}, 가격 : ${price}`);
}

goMart();
pickDrink(pay); //인자안받아도 됨
// pay();

//가독성 떨어지고 수정 난이도 올라가서 콜백함수는 굳이 쓰지 않는것이 좋다!
