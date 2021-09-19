'use strict'

const selectFirst = document.querySelector('.converter__select--first');
const selectSecond = document.querySelector('.converter__select--second');

const inputFirst = document.querySelector('.converter__input--first');
const inputSecond = document.querySelector('.converter__input--second');

fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.json())
    .then(json => showValute(json))

function showValute(val) {

    const valute = val.Valute;
    let displayValute;

  for (let key in valute) {
    console.log(valute[key]);

   displayValute += `
    <option class="converter__select--value" value="${valute[key].CharCode}" selected>${valute[key].Name}</option>
    `;

    selectFirst.innerHTML = displayValute;
    selectSecond.innerHTML = displayValute;
  }
  checkCurrentValute();
};

function checkCurrentValute() {
  let firstValue = '';
  let secondValue = '';
  let firstValute = '';
  let secondValute = '';

  inputFirst.addEventListener('input', () => {
    firstValue = inputFirst.value;
  });

  inputSecond.addEventListener('input', () => {
    secondValue = inputSecond.value;
  });

  selectFirst.addEventListener('input', () => {
    firstValute = selectFirst.value;
    console.log(firstValute);
  });

  selectSecond.addEventListener('input', () => {
    secondValute = selectSecond.value;
    console.log(secondValute);
  });

  currencyCalculation();
};

function currencyCalculation() {

};
