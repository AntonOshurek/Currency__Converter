'use strict'

//const { name } = require("browser-sync");

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;

    showValute(result.Valute)
}
getCurrencies();

function showValute(val) {
  const selectFirst = document.querySelector('.converter__select--first');
  const selectSecond = document.querySelector('.converter__select--second');

  console.log(val);

  let displayValute

  for (let key in val) {
    console.log(val[key]);
    //const valName = val[key];

   displayValute += `
    <option class="converter__select--value" value="${val[key].CharCode}" selected>${val[key].Name}</option>
    `;

    selectFirst.innerHTML = displayValute;
    selectSecond.innerHTML = displayValute;
  }
}
