import View from './ol/View';
import Map from './ol/Map';
import TileLayer from './ol/layer/Tile';
import OSM from './ol/source/OSM';
/* New imports */
import VectorLayer from './ol/layer/Vector';
import VectorSource from './ol/source/Vector';
import GeoJSON from './ol/format/GeoJSON';


new Map({
    target,
    view: new View({
        center: [0, 0],
        zoom: 2,
    }),
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
        // New VectorLayer with VectorSource and the countries.geojson file as source
        new VectorLayer({
            source: new VectorSource({
                url: './data/venezuela.geojson',
                format: new GeoJSON(),
            })
        })
    ]
});

