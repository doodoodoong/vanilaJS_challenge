const content = document.querySelector("h2");

const superEventHandler = {
  mouseIn: () => {
    content.innerText = "Cursor In!";
  },
  mouseOut: () => {
    content.innerText = "Cursor Out!";
  },
  transSize: () => {
    content.innerText = "Resized!";
  },
  rightClick: (e) => {
    if (e.button === 2) {
      content.innerText = "Right Click!";
    }
  },
};

content.addEventListener("mouseenter", superEventHandler.mouseIn);
content.addEventListener("mouseleave", superEventHandler.mouseOut);
window.addEventListener("resize", superEventHandler.transSize);
window.addEventListener("mousedown", superEventHandler.rightClick);
