'use strict'

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    console.log(result);
}

getCurrencies();

const input = document.querySelector('.input');
const text = document.querySelector('.text');

input.addEventListener('input', (e) => {
    console.log(e.data);
    text.textContent = `вы ввели число - ${e.data}`;
});
