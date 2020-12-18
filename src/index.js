import App from './components/App.js';
import './styles.css';
import { createChart } from './chart.js';

window.onload = () => {
    document.body.append(new App().init());
    createChart();
}