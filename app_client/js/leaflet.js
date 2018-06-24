function initMap() {

  // Basemap
  var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    minZoom: 8,
    maxZoom: 24,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    noWrap: true
  });

  // Map
  var map = L.map('map', {
    center: [51.963090, 7.622603],
    zoom: 16,
    minZoom: 8,
    maxZoom: 22,
    layers: [googleSat],
    zoomControl: false,
    noWrap: true
  });

  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);

};