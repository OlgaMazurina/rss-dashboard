
import App from './components/App.js';
import './styles.css';
import { createChart } from './chart.js';
import { createMap } from './map.js';
import { createTotalStat } from './totalCases.js';

window.onload = () => {
    document.body.append(new App().init());
    createChart();
    createMap();
    createTotalStat();
}
