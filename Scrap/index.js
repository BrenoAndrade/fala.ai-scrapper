const axios = require('axios');
const { JSDOM } = require('jsdom');

const firebase = require('./firebase').default;

const { pages } = require('./config');
const TIMER = 1000 * 60 * 60 * 24;

async function downloadHTML(url) {
  const response = await axios.get(url)
  return response.data
}

function scrapperShips(html, table, formater) {
  const ships = [];

  const dom = new JSDOM(html);
  const rows = dom.window.document.querySelectorAll(table+" tr");

  for (let i = 0; i < rows.length; i++) {
    let row = [], cols = rows[i].querySelectorAll("td, th");

    for (let j = 0; j < cols.length; j++) {
      row.push(cols[j].textContent);
    }

    if([8, 9].includes(row.length)) {
      ships.push(formater(row));	
    }
  }
  
  return ships
}

async function init() {
  try {
    let data = []

    for(const page of pages) {

      const { url, table, formater } = page;
      const html = await downloadHTML(url);

      data = [
        ...data, 
        ...scrapperShips(html, table, formater)
      ];
    }

    await firebase.database().ref('/ships').set(data);

    console.log('sucesso: navios resgatados:', data.length);
  } catch(e) {
    console.error('ocorreu um erro:', e);
  }
};

module.exports = init
