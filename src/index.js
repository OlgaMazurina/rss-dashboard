
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

    getCountriesInfo(status) {
        let obj = getAllCountries();
        
        obj.then( result => {
            result.sort((a, b) => b[status] > a[status] ? 1 : -1);
                result.map(el => {
                    const countryBlock = document.querySelector('.totalCountry_block');
                    const block = document.createElement('div');
                    const h3 = document.createElement('h3');
                    block.innerHTML = el.country;
                    h3.innerHTML = el.cases;
                    countryBlock.appendChild(block);
                    block.appendChild(h3);
                    // console.log(el.country);
                    // console.log(el.countryInfo.flag);
                    // console.log(el.cases);
            });
            // return console.log(result);
            console.log(result);
        });
    }
}


window.onload = () => {
    countriesInfo.getCountriesInfo('cases');
    document.body.append(new App().init());
    createChart();
    createMap();
    createTotalStat();
    getTodayDate();
};
