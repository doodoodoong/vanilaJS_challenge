const remainTime = document.querySelector(".remain-container");

function remainDay() {
  const christmas = new Date("2023-12-25");
  const now = new Date();
  const remain = christmas - now;

  const remainDay = String(Math.floor(remain / (1000 * 60 * 60 * 24)));
  const remainHour = String(
    Math.floor((remain / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const remainMin = String(Math.floor((remain / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const remainSec = String(Math.floor((remain / 1000) % 60)).padStart(2, "0");

  remainTime.innerText = `${remainDay}d ${remainHour}h ${remainMin}m ${remainSec}s`;
}

remainDay();
setInterval(remainDay, 1000);
