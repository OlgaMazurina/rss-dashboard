
import App from './components/App.js';
import './styles.css';
import { createChart } from './chart.js';
import { createMap } from './map.js';
import { createTotalStat } from './totalCases.js';
import { getAllCountries } from './APIdata.js';

const getTodayDate = () => {
    let months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    document.querySelector('.footer_year').innerHTML =
    new Date().getDate() + " " + months[new Date().getMonth()] + ' 2020';
};

export const countriesInfo = {

    getCountriesInfo() {
        let obj = getAllCountries();
        
        obj.then( result => {
            result.sort((a, b) => b['cases'] > a['cases'] ? 1 : -1);
                result.map(el => {
                    const casesBlock = document.querySelector('.totalCountry_block');
                    const newBlock = document.createElement('div');
                    const h3 = document.createElement('h3');
                    newBlock.innerHTML = el.country;
                    h3.innerHTML = el.cases;
                    casesBlock.appendChild(newBlock);
                    newBlock.appendChild(h3);
                    // console.log(el.country);
                    // console.log(el.countryInfo.flag);
            });
        });

        obj.then( result => {
            result.sort((a, b) => b['deaths'] > a['deaths'] ? 1 : -1);
                result.map(el => {
                    const deathsBlock = document.querySelector('.globalDeathsWrapp');
                    const newBlock = document.createElement('div');
                    const h3 = document.createElement('h3');
                    newBlock.innerHTML = el.country;
                    h3.innerHTML = el.deaths;
                    deathsBlock.appendChild(newBlock);
                    newBlock.appendChild(h3);
            });
        });

        obj.then( result => {
            result.sort((a, b) => b['recovered'] > a['recovered'] ? 1 : -1);
                result.map(el => {
                    const recoveredBlock = document.querySelector('.globalRecoveredWrapp');
                    const newBlock = document.createElement('div');
                    const h3 = document.createElement('h3');
                    newBlock.innerHTML = el.country;
                    h3.innerHTML = el.recovered;
                    recoveredBlock.appendChild(newBlock);
                    newBlock.appendChild(h3);
            });
        })
    }
}


window.onload = () => {
    countriesInfo.getCountriesInfo();
    document.body.append(new App().init());
    createChart();
    createMap();
    createTotalStat();
    getTodayDate();
};
