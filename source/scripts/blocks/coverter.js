export default function converter(data) {
  const selectFirst = document.querySelector('.converter__select--first');
  const selectSecond = document.querySelector('.converter__select--second');

  const inputFirst = document.querySelector('.converter__input--first');
  const inputSecond = document.querySelector('.converter__input--second');

  let valute = '';

  // fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  //     .then(response => response.json())
  //     .then(json => showValute(json))

  function showValute() {

      valute = data.Valute;
      //console.log(valute);
      let displayValute;

    for (let key in valute) {

    displayValute += `
      <option class="converter__select--value" value="${valute[key].CharCode}" selected>${valute[key].Name}</option>
      `;

      selectFirst.innerHTML = displayValute;
      selectSecond.innerHTML = displayValute;
    }
    checkCurrentValute();
  };

  showValute(data);

  function checkCurrentValute() {
    let firstValue = '';
    let secondValue = '';
    let firstValute = '';
    let secondValute = '';

    inputFirst.addEventListener('input', () => {
      firstValue = inputFirst.value;
      currencyCalculation(firstValue, secondValue, firstValute, secondValute);
    });

    inputSecond.addEventListener('input', () => {
      secondValue = inputSecond.value;
      currencyCalculation(firstValue, secondValue, firstValute, secondValute);
    });

    selectFirst.addEventListener('input', () => {
      firstValute = selectFirst.value;
      currencyCalculation(firstValue, secondValue, firstValute, secondValute);
    });

    selectSecond.addEventListener('input', () => {
      secondValute = selectSecond.value;
      currencyCalculation(firstValue, secondValue, firstValute, secondValute);
    });
  };

  function currencyCalculation(firstValue, secondValue, firstValute, secondValute) {

    let firstObgValute = {};
    let secondObgValute = {};

    for (let key in valute) {

      if (valute[key].CharCode == firstValute) {
        firstObgValute = {
          nominal: valute[key].Nominal,
          value: valute[key].Value
        };
      }

      if (valute[key].CharCode == secondValute) {
        secondObgValute = {
          nominal: valute[key].Nominal,
          value: valute[key].Value
        };
      }
    }
  };

  return valute;
};
