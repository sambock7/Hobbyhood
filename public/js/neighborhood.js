// let parks = [{"id": 1,
// "name": "American-Playground"
// },
// {
// "id": 2,
// "name": "Amersfort-Park"
// },
// {
// "id": 3,
// "name": "Bartel-Pritchard-Square"
// },
// {
// "id": 4,
// "name": "Beattie-Square"
// },
// {
// "id": 5,
// "name": "Bensonhurst-Park"}]


// let parkName = input[0].value





$(function() {

  let API = {
    getPark: function(name) {
    return $.ajax({
      url: "api/parks/name/" + name,
      type: "GET"
    });
  }}

  
  
  let input = $("#park-name")
  let parkName = input[0].value
  let data = API.getPark(parkName)
  $("#park-button").click(function() {
    API.getPark(parkName).then(addMarker)
    // addMarker(data)
  });
  function addMarker(data) {
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
            'features': [{
              type: 'Feature',
              properties: {
                'marker-color': '#7e7e7e',
                'marker-size': 'medium',
                'marker-symbol': '',
                Name: data.name,
                Game: 'Create Game'
              },
              geometry: { type: 'Point', coordinates: [ parseFloat(data.latitude), parseFloat(data.longitude) ] }
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
  }

  mapboxgl.accessToken = 'pk.eyJ1IjoiYWNoYXRtYWppYW4iLCJhIjoiY2s1cHp3YXlpMDI5cDNvbnZ0NGdsdG1iNSJ9.Qg1Dwtxq3HX2lJ6cBYWDhA';
  var map = new mapboxgl.Map({
    container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.95, 40.72],
  zoom: 10.5,
  attributionControl: false
});
map.addControl(new mapboxgl.AttributionControl(), 'top-left');

// map.on('load', function() {
// map.loadImage(
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png',
//   function(error, image) {
// if (error) throw error;
// map.addImage('cat', image);
// // map.addLayer({
//   //   'id': 'points',
//   //   'type': 'symbol',
//   //   'source': {
//   //     'type': 'geojson',
//   //     'data': {
//     //       'type': 'FeatureCollection',
//     //       'features': []
//   //           }
//   //         },
//   //         'layout': {
//     //           'icon-image': 'cat',
//   //           'icon-size': 0.08
//   //         }
//   //     });
// }
//   );
// });
// });

// function addMapLayer(data) {
//   map.addLayer({
//     'id': 'points',
//     'type': 'symbol',
//     'source': {
//       'type': 'geojson',
//       'data': {
//         'type': 'FeatureCollection',
//         'features': [{
//           type: 'Feature',
//           properties: {
//             'marker-color': '#7e7e7e',
//             'marker-size': 'medium',
//             'marker-symbol': '',
//             Name: data.name,
//             Game: 'Create Game'
//           },
//           geometry: { type: 'Point', coordinates: [ data.longitude, data.latitude ] }
//         }]}},
//         'layout': {
//                     'icon-image': 'cat',
//                     'icon-size': 0.08
//                   }
//       })
//   // addMarker(data)
// }



})

// function addMarker(e){
  
  //add marker
//   circleMarker = new  L.circle(e.latlng, 200, {
//                 color: 'red',
//                 fillColor: '#f03',
//                 fillOpacity: 0.5
//             }).addTo(map);
// }
