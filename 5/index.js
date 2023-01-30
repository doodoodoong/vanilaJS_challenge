const h1 = document.createElement("h1");
const content = document.createTextNode("Hello");
h1.appendChild(content);
document.body.appendChild(h1);

const body = document.querySelector("body");
let bgColor = body.style.backgroundColor;
function changeBgColor() {
  if (window.innerWidth <= 600) {
    console.log("small");
    document.querySelector("body").style.backgroundColor = "#d72631";
  } else if (window.innerWidth > 600 && window.innerWidth <= 1300) {
    console.log("medium");
    document.querySelector("body").style.backgroundColor = "#a2d5c6";
  } else if (window.innerWidth > 1300) {
    console.log("large");
    document.querySelector("body").style.backgroundColor = "#5c3c92";
  }
}
window.addEventListener("resize", changeBgColor);
