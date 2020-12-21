
import App from './components/App.js';
import './styles.css';
import { createChart } from './chart.js';
import { createMap } from './map.js';
import { createTotalStat } from './totalCases.js';

const getTodayDate = () => {
    let months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    document.querySelector('.footer_year').innerHTML =
    new Date().getDate() + " " + months[new Date().getMonth()] + ' 2020';
}

window.onload = () => {
    document.body.append(new App().init());
    createChart();
    createMap();
    createTotalStat();
    getTodayDate();
}
