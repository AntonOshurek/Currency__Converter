export default function valuteList() {

  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  .then(response => response.json())
  .then(json => getValute(json))

  const getValute = (val) => {
    let valute = val.Valute;
    console.log(valute)

    showValute(valute);
  }

  const showValute = (valute) => {
    const valuteList = document.querySelector('.valute__list');
    const valuteItems = [];

    for(let key in valute) {
      //valuteItems.push(valute[key])
      let val = `
      <li class="valute__item">
      <p class="valute__info valute__from">${valute[key].CharCode}</p>
      <p class="valute__info valute__amout">${valute[key].Nominal}</p>
      <p class="valute__info valute__to">${valute[key].Value} <span>$</span></p>
    </li>
      `;
      valuteItems.push(val);
    }

    valuteList.innerHTML = valuteItems;
  }

}
