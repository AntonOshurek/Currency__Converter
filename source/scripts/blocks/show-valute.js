const selectFirst = document.querySelector('.converter__select--first');
const selectSecond = document.querySelector('.converter__select--second');

const showValute = (data) => {
  let valuteObj = data.Valute;

  let displayValute;

  for (let key in valuteObj) {
    displayValute += `
      <option class="converter__select--value" value="${valuteObj[key].CharCode}"
      selected>${valuteObj[key].Name}</option>`;
  }

  selectFirst.innerHTML = displayValute;
  selectSecond.innerHTML = displayValute;
}

export {showValute};

