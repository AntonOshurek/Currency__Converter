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
};
