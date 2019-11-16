
// initialize the map
var map = L.map('map').setView([10.48801,-66.87919], 6);
    
// load a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    minZoom: 3
  }).addTo(map);

  
var url = 'venezuela.geojson';
function style (feature) {
  return {
    fillColor: 'green', 
        fillOpacity: 0.5,  
        weight: 2,
        opacity: 1,
        color: '#ffffff',
        dashArray: '3'
  };
}

function forEachFeature(feature,layer) {
  var popupContent = "<p><b>ESTADO:</b>"+ feature.properties.ESTADO+'</p>';

  layer.bindPopup(popupContent);
}
var venezuela = L.geoJson(null, {onEachFeature: forEachFeature, style: style});

$.getJSON("./data/venezuela.geojson",function(data){
  venezuela.addData(data);
// add GeoJSON layer to the map once the file is loaded

venezuela.addTo(map);

// var geoJsonLayer = L.geoJson(data, {style: styleFunction})
// .addTo(map);
// function styleFunction(){
// return {color: "#e0e0e0"};
// }

});

