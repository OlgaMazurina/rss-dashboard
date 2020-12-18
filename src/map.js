export function createMap() {
    const mymap = L.map('mapid').setView([35, 0], 2);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiMGxnYSIsImEiOiJja2l1OW16dTEydnNxMnJsYmxmN29kZHQ0In0.8aKToKJUpLWf0fzGd3NAIg'
}).addTo(mymap);
}