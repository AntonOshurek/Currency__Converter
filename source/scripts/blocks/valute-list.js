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
      valuteItems.push(valute[key])
    }

    console.log(valuteItems)

  }

}
