let countDownDay = new Date("Jan 1, 2023 12:00:00").getTime();

const countDown = () => {
  let dayNow = new Date().getTime();
  let distance = countDownDay - dayNow;
  let day, hours, minutes, seconds;

  day = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //para aparecer o resultado
  document.getElementById("countDown").innerHTML =
    day +
    ":" +
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "LANÇADO";
  }
};
countDown();
setInterval(countDown, 1000);
