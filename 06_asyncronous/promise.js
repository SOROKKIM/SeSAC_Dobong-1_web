let product, price;
function goMart() {
  console.log("마트에 들어가서 음료 고민중");
}

function pickDrink() {
  //3초동안 음료 선택 고민

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝");
      product = "제로콜라";
      price = 2000;

      //   resolve("구매 완료");
      reject("실패");
    }, 3000);
  });
}

function pay() {
  console.log(`상품명 : ${product}, 가격 : ${price}`);
}

goMart();
pickDrink()
  .then(() => {
    pay();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("마트에서 나왔어요.");
  });
