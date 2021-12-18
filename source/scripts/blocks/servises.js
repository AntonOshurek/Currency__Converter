const GET_DATA_SOURCE = 'https://www.cbr-xml-daily.ru/daily_json.js';

const getData = () => fetch(GET_DATA_SOURCE)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
});

export {getData};
