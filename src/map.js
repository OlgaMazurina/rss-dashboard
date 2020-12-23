import { getCountriesCoordinates } from './APIdata.js';
import create from './services/create.js';
let mymap;
let circles;

export async function createMap() {
    mymap = L.map('mapid').setView([35, 0], 2);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: '0lga/ckiugj6p52uyc19s30c3ye3px',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiMGxnYSIsImEiOiJja2l1OW16dTEydnNxMnJsYmxmN29kZHQ0In0.8aKToKJUpLWf0fzGd3NAIg'
    }).addTo(mymap);

    drawCircles();

    const legend = createLegend();
    document.querySelector(".leaflet-right.leaflet-top").appendChild(legend);

    document.querySelector('.drop').onchange = function() {
        drawCircles();
        console.log('drawCircles');
    }
}

let drawCircles = async function() {
    if (circles) {
        circles.clearLayers();
    }

    let circlesArr = [];
    for (let country of await getCountriesCoordinates()) {
        let circle = L.circle([country['countryInfo']['lat'], country['countryInfo']['long']], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: country['cases'] / 25
        })
        circlesArr.push(circle);
        // let popup = L.popup({className: 'popup'})
        //     .setLatLng(circle.getLatLng())
        //     .setContent(`<b>${country['country']}</b><br>Cases: ${country['cases']}<br>Deaths: ${country['deaths']}`)
        //     .openOn(mymap);
        // circle.bindPopup(popup);
        circle.bindPopup(`<b>${country['country']}</b><br>Cases: ${country['cases']}<br>Deaths: ${country['deaths']}`);
    }
    circles = L.layerGroup(circlesArr).addTo(mymap);
}

let createLegend = function () {
    return create('select', { classes: ['drop', 'leaflet-control'], attributes: [] }, '', [
        create('option', { classes: ['drop-opt'], attributes: [['selected', 'selected']]}, 'number of cases total (abs)'),
        create('option', { classes: ['drop-opt'], attributes: []}, 'number of cases total (per 100k)'),
        create('option', { classes: ['drop-opt'], attributes: []}, 'number of cases last day (abs)'),
        create('option', { classes: ['drop-opt'], attributes: []}, 'number of cases last day (per 100k)'),

        create('option', { classes: ['drop-opt'], attributes: []}, 'number of deaths total (abs)'),
        create('option', { classes: ['drop-opt'], attributes: []}, 'number of deaths total (per 100k)'),
        create('option', { classes: ['drop-opt'], attributes: []}, 'number of deaths last day (abs)'),
        create('option', { classes: ['drop-opt'], attributes: []}, 'number of deaths last day (per 100k)'),

        create('option', { classes: ['drop-opt'], attributes: []}, 'number of recovered total (abs)'),
        create('option', { classes: ['drop-opt'], attributes: []}, 'number of recovered total (per 100k)'),
        create('option', { classes: ['drop-opt'], attributes: []}, 'number of recovered last day (abs)'),
        create('option', { classes: ['drop-opt'], attributes: []}, 'number of recovered last day (per 100k)')
    ])
}
