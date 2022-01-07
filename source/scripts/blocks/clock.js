export default function clock() {

  const horse = document.querySelector('.clock__hourse');
  const minutes = document.querySelector('.clock__minutes');
  // const seconds = document.querySelector('.time__item--seconds');

  function getZero (num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  const checkHourse = (time) => {
    if(time > 1 && time < 5) {
      return 'часа';
    }

    if(time >= 5 && time < 21) {
      return 'часов';
    }

    if(time > 21 && time < 25) {
      return 'часа';
    }

    if(time == 1 || time == 21) {
      return 'час';
    }
  }

  console.log(checkHourse(21))


  const updateclock = () => {
    horse.textContent = `${getZero(new Date().getHours())} ${checkHourse(new Date().getHours())}`;
    minutes.textContent = `${getZero(new Date().getMinutes())}`;
    // seconds.textContent = getZero(new Date().getSeconds());
  };

  updateclock();
  const timeInterva = setInterval(updateclock, 1000);
};
