// red, orange, yellow, green, blue
function changeBgColor(color) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, 1000);
  });
}

changeBgColor("red")
  .then(() => {
    changeBgColor("orange");
  })
  .then(() => {
    changeBgColor("orange");
  })
  .then(() => {
    changeBgColor("yellow");
  })
  .then(() => {
    changeBgColor("green");
  })
  .then(() => {
    changeBgColor("blue");
  })
  .catch((err) => {
    console.log(err);
  });
