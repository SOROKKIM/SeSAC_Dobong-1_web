function call(name) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

call("kim")
  .then((result) => {
    console.log(result + " 반가워");
    return back();
  })
  .then((result) => {
    console.log(result + "을 실행했구나");
    return hell();
  })
  .then((result) => {
    console.log("여기는 " + result);
  })
  .catch((error) => {
    console.error("에러 발생:", error);
  });
