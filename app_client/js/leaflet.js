var map;

function initMap() {

  // Basemap
  var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    minZoom: 8,
    maxZoom: 22,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    noWrap: true
  });

  // Map
  map = L.map('map', {
    center: [51.963090, 7.622603],
    zoom: 16,
    minZoom: 8,
    maxZoom: 22,
    layers: [googleSat],
    zoomControl: false,
    noWrap: true
  });

  L.control.zoom({
    position: 'bottomleft'
  }).addTo(map);
};


function addTileLayer(folder) {
  console.log(folder);

  var tilelayer = L.tileLayer('tiles/' + folder + '/{z}/{x}/{y}.png', {
    attribution: 'Tiles',
    tms: true,
    minZoom: 8,
    maxZoom: 22
  });
  tilelayer.addTo(map);
};