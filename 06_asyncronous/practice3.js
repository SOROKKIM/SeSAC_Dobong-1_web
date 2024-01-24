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

async function execute() {
  const name = await call("kim");
  console.log(name + "반가워");
  const back1 = await back();
  console.log(back1 + "을 실행했구나");
  const hell1 = await hell();
  console.log("여기는 " + hell1);
}
execute();
