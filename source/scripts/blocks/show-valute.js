const selectFirst = document.querySelector('.converter__select--first');
const selectSecond = document.querySelector('.converter__select--second');
const valuteItem = document.querySelector('#valute-item');

const getValuteList = (data) => {
  let valuteObj = data.Valute;
  const fragment = new DocumentFragment();

  for (let key in valuteObj) {
    const templateItem = valuteItem.content.cloneNode(true);

    templateItem.querySelector('.converter__select--value').value = valuteObj[key].CharCode;
    templateItem.querySelector('.converter__select--value').textContent = valuteObj[key].Name;

    fragment.append(templateItem);
  }

  return fragment;
}

const showValute = (data) => {
  // selectFirst.append(getValuteList(data));
  // selectSecond.append(getValuteList(data));
}

export {showValute};

