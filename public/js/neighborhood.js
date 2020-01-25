$(function() {
mapboxgl.accessToken = 'pk.eyJ1IjoiYWNoYXRtYWppYW4iLCJhIjoiY2s1cHp3YXlpMDI5cDNvbnZ0NGdsdG1iNSJ9.Qg1Dwtxq3HX2lJ6cBYWDhA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.95, 40.72],
  zoom: 10.5,
  attributionControl: false
});
map.addControl(new mapboxgl.AttributionControl(), 'top-left');

map.on('load', function() {
map.loadImage(
'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png',
function(error, image) {
if (error) throw error;
map.addImage('cat', image);
  map.addLayer({
    'id': 'points',
    'type': 'symbol',
    'source': {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [
            {
                  'type': 'Feature',
                  'geometry': {
                      'type': 'Point',
                      'coordinates': [-73.95, 40.72]
                   }
                 }
              ]
            }
          },
          'layout': {
            'icon-image': 'cat',
            'icon-size': 0.08
          }
      });
    }
  );
});
});