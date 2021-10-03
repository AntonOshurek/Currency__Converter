export default function clock() {
  const horse = document.querySelector('.time__item--horse');
  const minutes = document.querySelector('.time__item--minutes');
  const seconds = document.querySelector('.time__item--seconds');

  function getZero (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
  };

  function updateclock() {
    horse.innerHTML = getZero(new Date().getHours());
    minutes.innerHTML = getZero(new Date().getMinutes());
    seconds.innerHTML = getZero(new Date().getSeconds());
  };
  updateclock();
  const timeInterva = setInterval(updateclock, 1000);

  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const hoursTime = new Date().getHours();
  const minutesTime = new Date().getMinutes();
  const secondsTime = new Date().getSeconds();

  //const date = new Date(Date.UTC(year, month, day, hoursTime, minutesTime, secondsTime));
  const date = new Date();
  console.log(date);
  console.log(date.toLocaleTimeString());
  console.log(date.toLocaleTimeString('en-GB'));
  console.log(date.toLocaleTimeString('ar-EG'));
};
