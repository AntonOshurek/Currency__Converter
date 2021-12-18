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

  const updateclock = () => {
    horse.textContent = getZero(new Date().getHours());
    minutes.textContent = getZero(new Date().getMinutes());
    seconds.textContent = getZero(new Date().getSeconds());
  };

  updateclock();
  const timeInterva = setInterval(updateclock, 1000);
};
