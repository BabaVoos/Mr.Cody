// The End Of The Year Date To Countdown To
// 1000 millisecond = 1 second

let countDownDate = new Date("Dec,31,2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // ind The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Tiime Units
  let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 100 / 60);

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 100 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

let myBtn = document.querySelector(".slider");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
};

myBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
