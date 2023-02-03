function now() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const clock = document.querySelector("#clock");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
now();
setInterval(() => now(), 1000);
