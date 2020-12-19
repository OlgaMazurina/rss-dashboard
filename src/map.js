import { getCountriesCoordinates } from './APIdata.js';

export async function createMap() {
    const mymap = L.map('mapid').setView([35, 0], 2);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: '0lga/ckiugj6p52uyc19s30c3ye3px',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiMGxnYSIsImEiOiJja2l1OW16dTEydnNxMnJsYmxmN29kZHQ0In0.8aKToKJUpLWf0fzGd3NAIg'
    }).addTo(mymap);

    for (let country of await getCountriesCoordinates()) {
        let circle = L.circle([country['countryInfo']['lat'], country['countryInfo']['long']], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: country['cases'] / 25
        }).addTo(mymap);
        // let popup = L.popup({className: 'popup'})
        //     .setLatLng(circle.getLatLng())
        //     .setContent(`<b>${country['country']}</b><br>Cases: ${country['cases']}<br>Deaths: ${country['deaths']}`)
        //     .openOn(mymap);
        // circle.bindPopup(popup);
        circle.bindPopup(`<b>${country['country']}</b><br>Cases: ${country['cases']}<br>Deaths: ${country['deaths']}`);
    }

}