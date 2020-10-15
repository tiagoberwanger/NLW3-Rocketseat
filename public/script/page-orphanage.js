const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,

}

//create map
const map = L.map('mapid', options).setView([-27.574825, -48.535111], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Associação Lar Recanto do Carinho <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')

//create and add marker
L.marker([-27.574825, -48.535111], {icon})
.addTo(map)

// function openWhatsapp() {
//     window.open(url)
// }