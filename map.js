
// initialize the map
var map = L.map('map').setView([10.48801,-66.87919], 6);
    
// load a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    minZoom: 3
  }).addTo(map);

  // load GeoJSON from an external file
$.getJSON("./data/venezuela.geojson",function(data){
// add GeoJSON layer to the map once the file is loaded
L.geoJson(data).addTo(map);

var geoJsonLayer = L.geoJson(data, {style: styleFunction})
.addTo(map);
function styleFunction(){
return {color: "#e0e0e0"};
}

});

