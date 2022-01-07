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

  const checkHourse = (hourse) => {
    if(hourse > 1 && hourse < 5) {
      return 'часа';
    }

    if(hourse >= 5 && hourse < 21) {
      return 'часов';
    }

    if(hourse > 21 && hourse < 25) {
      return 'часа';
    }

    if(hourse === 1 || hourse === 21) {
      return 'час';
    }
  }

 const checkMinutes = (minutes) => {
   let minutesString = minutes.toString();
  //  console.log(minutes)
  if(minutes === 1 || (minutes > 11 && (minutesString[1] == 1))) {
    return 'минута';
  }
  if(minutes > 1 && minutes <= 4 || (minutes > 20 && (minutesString[1] < 5 && minutesString[1] > 1))) {
    return 'минуты';
  }
  if(minutes >= 5 && minutes <= 20 || (minutes >= 20 && (minutesString[1] == 0)) || (minutes > 20 && (minutesString[1] >= 5 && minutesString[1] <= 9)) || minutes == 0) {
    return 'минут';
  }
 }

  const updateclock = () => {
    horse.textContent = `${getZero(new Date().getHours())} ${checkHourse(new Date().getHours())}`;
    minutes.textContent = `${getZero(new Date().getMinutes())} ${checkMinutes(new Date().getHours())}`; // ${checkMinutes(new Date().getHours())}
    // seconds.textContent = getZero(new Date().getSeconds());
  };

  updateclock();
  const timeInterva = setInterval(updateclock, 1000);
};
