//default
import {getData} from './blocks/servises';
import {showValute} from './blocks/show-valute';
import clock from './blocks/clock'

getData().then((data) => {
  if(data) {
    showValute(data);
    console.log(data.Valute)
  }
}).catch((err) => {
  //showAlert(`ошибка сервера - ${err}`);
});

window.addEventListener('DOMContentLoaded', () => {
  clock();
});

