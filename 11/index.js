const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const button = document.querySelector("body > button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const colorArray = [];
  const randInt = Math.floor(Math.random() * colors.length);
  colorArray.push(randInt);
  if (colorArray.length === 1) {
    colorArray.push(Math.floor(Math.random() * colors.length));
    if (colorArray[0] === colorArray[1]) {
      colorArray.pop();
    }
  }
  body.style.background = `linear-gradient(to right, ${
    colors[colorArray[0]]
  }, ${colors[colorArray[1]]})`;
});

// 1. 버튼 누르면 랜덤으로 색깔 두개 뽑기

// 2. css로 linear-gradient로
