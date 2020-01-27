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
        'features': [{
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'American-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7287796', '-73.95790625' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Amersfort-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62865494', '-73.93901443' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bartel-Pritchard-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66099958', '-73.97986949' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Beattie-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69643082', '-73.93454347' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bensonhurst-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59726657', '-74.00082814' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Betsy-Head-Memorial-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.662695', '-73.91333633' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brooklyn-Botanic-Garden',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66811275', '-73.96457436' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brower-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6739368', '-73.94319887' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Maria-Hernandez-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70317127', '-73.92386495' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bushwick-Playground_Knickerbocker-Ave',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69607127', '-73.91215311' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Canarsie-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62798483', '-73.89425305' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Carroll-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68109036', '-73.99543263' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Commodore-Barry-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69730107', '-73.97892001' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Middleton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70068128', '-73.95542066' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'lafayette-playground_stillwell-ave',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59456407', '-73.98536984' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cooper-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71587948', '-73.93732662' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cuyler-Gore-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68569884', '-73.97216964' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Veterans-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65690146', '-73.90387258' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dyker-Beach-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61175738', '-74.01819188' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Eastern-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67088482', '-73.95970468' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Eastern-Parkway-Extension',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66891424', '-73.92134145' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fidelity-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72186068', '-73.9418219' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fort-Greene-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69150404', '-73.97545412' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fort-Hamilton-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61640345', '-74.03074893' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'John-Paul-Jones-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.611084', '-74.03385449' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fort-Stirling-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69847645', '-73.99654857' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Freedom-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6972413', '-73.93181461' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fulton-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67975264', '-73.93288279' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grand-Army-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6740402', '-73.96929704' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grant-Gore',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67648282', '-73.95280608' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gravesend-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62340296', '-73.9840818' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Greenpoint-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73569262', '-73.95917891' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dr-Ronald-McNair-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67052596', '-73.9619679' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Heisser-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69871156', '-73.91790789' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Highland-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68865883', '-73.8861146' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brooklyn-Museum',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67069732', '-73.96372978' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Irving-Square-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69245291', '-73.90920105' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'van-voorhees-park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69087076', '-73.99939574' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kelly-Park-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60415213', '-73.95766476' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Leif-Ericson-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63080099', '-74.01187882' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lincoln-Terrace-Arthur-S-Somers-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66678955', '-73.92718829' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sternberg-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7062314', '-73.947236' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'martin-luther-king-playground_manhattan',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80017871', '-73.95038413' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marine-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59206744', '-73.92091968' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McCarren-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72148813', '-73.9526896' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McKinley-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62673997', '-74.01643967' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McLaughlin-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69651562', '-73.98606581' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Memorial-Gore',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71484136', '-73.94237897' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Milestone-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60952502', '-73.99950155' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ocean-Parkway-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62175279', '-73.9701908' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Owls-Head-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64008962', '-74.03236453' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Parade-Ground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6508881', '-73.96832853' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Machate-Circle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65102597', '-73.97218989' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Prospect-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66166595', '-73.97076952' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Coffey-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67761935', '-74.00851769' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grace-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67143242', '-73.89444584' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Saratoga-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68498035', '-73.91899958' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'asser-levy-park-and-aquarium',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.5743278', '-73.97320631' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Shore-Park-and-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61459998', '-74.03818945' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Metropolitan-Recreation-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7150238', '-73.96031128' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sunset-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64797599', '-74.00374327' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Herbert-Von-King-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6896722', '-73.94661996' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lowry-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6806342', '-73.96452284' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sobel-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70736457', '-73.96153403' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Weeksville-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67715189', '-73.91948284' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sgt-Joyce-Kilmer-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60788522', '-73.96068726' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ennis-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67080793', '-73.99378917' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sgt-William-Dougherty-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.723738', '-73.93709645' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sledge-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63818875', '-73.89779366' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Martin-Luther-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64578963', '-74.01975552' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lt-Joseph-Petrosino-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61907241', '-73.99845337' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Seth-Low-Playground-Bealin-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60822091', '-73.98632481' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Crispus-Attucks-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68155975', '-73.95922114' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cypress-Hills-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67043786', '-73.87170439' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Taaffe-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69525338', '-73.96070346' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Scarangella-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59466557', '-73.9843399' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lions-Pride-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66264676', '-73.89975276' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bill-Brown-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59216679', '-73.94566271' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marion-Hopkinson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68168586', '-73.91357542' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'j-j-byrne-playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67280581', '-73.98417831' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'washington-park_brooklyn',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67303674', '-73.98552994' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Korean-War-Veterans-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69559452', '-73.99056202' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Columbus-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69372458', '-73.9899349' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Walt-Whitman-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69827436', '-73.9893684' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Msgr-McGolrick-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72444764', '-73.94336802' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cohn-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7073544', '-73.96464296' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Zion-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66866904', '-73.91875251' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lindsay-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70418692', '-73.948286' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Marys-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81173114', '-73.91254827' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dodger-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66487474', '-73.95235855' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Alben-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63941914', '-73.99458028' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'William-Sheridan-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71521206', '-73.96415009' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Calvert-Vaux-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58464589', '-73.99511764' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Todd-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6720974', '-74.00870386' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Martinez-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70910521', '-73.94437245' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Colonel-David-Marcus-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6097029', '-73.96958866' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Greenwood-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65020163', '-73.97641793' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rudd-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68324154', '-73.90528277' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gilbert-Ramirez-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70597601', '-73.93449886' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Newtown-Barge-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73592431', '-73.96003406' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sixteen-Sycamores-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68679334', '-73.98100471' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Heckscher-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69517601', '-73.9184474' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Banneker-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6903597', '-73.94903746' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'City-Line-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67954778', '-73.8748161' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bedford-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70831904', '-73.96387315' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ocean-Hill-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67442621', '-73.91218723' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Thomas-Greene-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68031748', '-73.98535032' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Quaker-Parrot-Park-at-the-Dust-Bowl',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63267825', '-74.01346533' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Monsignor-Crawford-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61406142', '-73.91679792' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Elton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66598852', '-73.88078663' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Linwood-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66614134', '-73.88040211' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kolbert-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62003823', '-73.95802141' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dome-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63822483', '-73.98023338' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rappaport-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63691935', '-74.00067861' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'South-Pacific-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67565147', '-73.92027104' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Berry-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71264039', '-73.96350996' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8245208', '-73.91087804' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Powell-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67127084', '-73.90479903' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Garibaldi-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60898213', '-74.00012143' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mount-Prospect-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67165542', '-73.96661964' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ketchum-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60550414', '-73.98232453' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Underhill-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67668948', '-73.96573355' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sperandeo-Brothers-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67690091', '-73.88435116' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bath-Beach-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60246271', '-74.01112464' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Spring-Creek-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64852447', '-73.8730864' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Homecrest-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58602714', '-73.95728307' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Coney-Island-Boat-Basin',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58386416', '-73.99205696' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sixteen-Lindens-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58434306', '-73.95221447' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'La-Guardia-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71045835', '-73.95968341' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Continental-Army-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71060029', '-73.9604552' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Coney-Island-Beach-and-Boardwalk',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.572689', '-73.97828386' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brighton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.5752008', '-73.9653701' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Poseidon-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57246913', '-73.99209323' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Linden-Sitting-Area',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65400377', '-73.91843275' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Heffernan-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64598745', '-73.99479789' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fraser-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61997028', '-73.94122856' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dahill-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61290664', '-73.97499306' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Trust-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61627126', '-73.92962587' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Flatbush-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63261544', '-73.96035721' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Flatbush-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62975382', '-73.96032898' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Howard-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66388851', '-73.919868' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Avenue-R-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60501143', '-73.96488631' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Barone-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62004093', '-73.90744253' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Russell-Pedersen-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6263648', '-74.03612601' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fort-Hamilton-Athletic-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62666547', '-74.0374153' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hamilton-Metz-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66256852', '-73.94093277' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harmony-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70327109', '-73.95042144' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pvt-Sonsire-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7184862', '-73.95254472' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mellett-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59699561', '-73.9574604' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kings-Highway-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62638451', '-73.93291441' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Greenstreet',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.620123', '-73.91067389' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Elizabeth-Stroud-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67967144', '-73.93108513' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lithuania-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70888991', '-73.95092743' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Corporal-Wiltshire-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61086402', '-73.95318632' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sunners-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63252563', '-73.9296783' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sarsfield-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62018909', '-73.93746047' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pfc-Norton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61460174', '-73.94487422' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Galapo-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59799329', '-73.94676145' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'DEmic-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65599233', '-74.00492178' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cough-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67445962', '-73.99990478' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Admiral-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67688592', '-74.00110276' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Triangle-Three-Sixteen',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66729423', '-73.9950359' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harold-Ickes-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68247487', '-74.00590201' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gonzalo-Plasencia-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65265527', '-74.00847453' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dan-Ross-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62275419', '-74.02156439' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'John-J-Carty-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61325502', '-74.03016603' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lady-Moody-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59672703', '-73.97444356' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hot-Spot-Tot-Lot',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63102589', '-73.95664682' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gravesend-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59502349', '-73.96938737' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Linden-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65903342', '-73.88692676' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Decatur-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68145771', '-73.93652183' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Raymond-Bush-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68636191', '-73.93956702' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marcy-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69558726', '-73.95090137' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Paerdegat-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63806086', '-73.93813242' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Callahan-Kelly-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6783473', '-73.90477153' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Washington-Hall-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69533603', '-73.96678487' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Steuben-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69739969', '-73.96342222' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pierrepont-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69624114', '-73.9975877' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dimattina-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68000682', '-74.00270716' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Adam-Yauch-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69226055', '-73.99969986' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brooklyn-Heights-Promenade',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69436216', '-73.9987452' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fruit-Street-Sitting-Area',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69961989', '-73.99633091' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Squibb-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70059371', '-73.99587143' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harry-Chapin-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7006605', '-73.99493379' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Anchorage-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70131505', '-73.99036892' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Clumber-Corner',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70116547', '-73.98918058' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bridge-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70104867', '-73.9857906' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bridge-Park-3',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70030369', '-73.98543435' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Trinity-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69951195', '-73.985383' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Classon-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69925441', '-73.96107228' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Penn-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70081551', '-73.96084733' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marcy-Park-South',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70748722', '-73.95801009' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rodney-Park-South',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70754573', '-73.95728668' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rodney-Park-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70856111', '-73.9567404' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rodney-Park-North',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70907614', '-73.95634035' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rodney-Playground-South',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70973296', '-73.955923' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rodney-Playground-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71023089', '-73.95556438' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rodney-Playground-North',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7110917', '-73.95498009' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marcy-Green-South',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70844207', '-73.95734723' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marcy-Green-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70932618', '-73.95705133' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marcy-Green-North',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70998873', '-73.95664567' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jaime-Campiz-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71363071', '-73.95434738' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Macri-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71436063', '-73.95219816' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Father-Giorgio-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7162578', '-73.94992134' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lentol-Garden',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71990887', '-73.94514389' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Badame-Sessa-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71715008', '-73.94848557' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Andrews-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6786855', '-73.94223806' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mt-Carmel-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71585185', '-73.95163264' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dr-Green-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66722644', '-73.90677218' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nicholas-Naquan-Heyward-Jr-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6845985', '-73.98787969' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Samuel-Goldberg-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6111218', '-73.9772322' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dean-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68087323', '-73.97319748' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tilden-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64764929', '-73.93142407' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Herman-Dolgon-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59804349', '-73.9399903' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Glenwood-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63668225', '-73.9198596' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'John-Hancock-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68237237', '-73.95465171' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sheepshead-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58895169', '-73.94020149' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tucker-Place',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58351282', '-73.94140481' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Meucci-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59573568', '-73.98328549' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Golconda-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69773114', '-73.98228359' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McDonald-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60062985', '-73.97202869' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jerome-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6589637', '-73.8794861' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Breukelen-Ballfields',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65296359', '-73.89299883' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Van-Dyke-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66442689', '-73.90400057' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nostrand-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63810789', '-73.94724992' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Manhattan-Beach-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57732841', '-73.94310461' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'West-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.5869274', '-73.97005759' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Albert-J-Parham-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69028138', '-73.97080057' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wingate-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65863838', '-73.94425671' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Purple-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66299818', '-73.98969555' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Detective-Joseph-Mayrose-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66133686', '-73.98767485' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Butterfly-Gardens',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66017264', '-73.98649266' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Thomas-J-Cuite-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65424591', '-73.97858175' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Seeley-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65332381', '-73.97778103' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sitting-Area',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65246266', '-73.97675301' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brooklyn-Academy-Of-Music',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68649829', '-73.97769362' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Frost-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71871901', '-73.93902854' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brevoort-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68045396', '-73.92270839' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Underwood-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68856034', '-73.96641916' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Howard-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67167401', '-73.90815845' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Howard-Pool',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6725281', '-73.90945421' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Potomac-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68203566', '-73.94462271' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sumner-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69723589', '-73.94278957' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Roebling-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70634774', '-73.96179283' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rainbow-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64056573', '-74.01108374' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Star-Spangled-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69190953', '-73.9580281' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jesse-Owens-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6914431', '-73.93246808' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brownsville-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6567088', '-73.90173968' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Railroad-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64942666', '-73.91427312' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marlboro-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59120435', '-73.98087803' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Aimee-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61298388', '-73.94400149' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bayview-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63486498', '-73.88691319' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grady-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58305317', '-73.96475344' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'J-W-Person-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69338762', '-73.97304594' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Benson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60241858', '-74.00220663' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sam-Leggio-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68506595', '-73.88194524' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wilson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64256878', '-73.89482381' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nellie-Bly-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.5908879', '-73.99446758' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marc-And-Jasons-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66345233', '-73.94946409' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harry-Maze-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64339899', '-73.92317551' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bartlett-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7009147', '-73.94604498' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Andries-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62277189', '-73.94642664' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cutinella-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59184971', '-73.97684851' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Public-Place',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67827303', '-73.86511345' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Power-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61815313', '-73.92732243' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pratt-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69260328', '-73.96245639' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Oxport-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6975405', '-73.97623096' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Albemarle-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64574448', '-73.98057504' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Stockton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6973346', '-73.94854494' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Oracle-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69391086', '-73.9715165' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Charlies-Place',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6991186', '-73.94601091' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kennedy-King-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65861012', '-73.9220545' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-286',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59093295', '-73.93852109' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tiger-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68823936', '-73.91098228' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Yak-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59260624', '-73.936536' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pink-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66656473', '-73.86268273' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ten-Eyck-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7088573', '-73.93885496' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Woodruff-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66543929', '-73.86606021' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'El-Shabazz-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6827838', '-73.93042776' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Surf-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57365625', '-73.9923442' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'DiGilio-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63267847', '-73.97714649' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lafayette-Gardens-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68958874', '-73.9573993' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Park-Slope-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67685804', '-73.97851543' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Edmonds-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68921801', '-73.97155682' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pulaski-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69360631', '-73.94169585' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hattie-Carthan-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68560722', '-73.94611963' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jacob-Joffe-Fields',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62537299', '-73.91936836' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fish-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67825184', '-73.9147725' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cobble-Hill-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68821974', '-73.99599164' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lindower-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61227835', '-73.91159874' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hickman-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62025419', '-73.91291724' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Neptune-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57816101', '-73.98059287' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Evergreen-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68614993', '-73.91074155' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fermi-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70013534', '-73.92828436' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bildersee-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63549549', '-73.91163983' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Abe-Stark-Skating-Rink',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57384705', '-73.98551289' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Century-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57701884', '-73.97003499' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tom-McDonald-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62192752', '-74.02259307' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Newport-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66088145', '-73.90703442' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Garden-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70111805', '-73.93830278' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Osborn-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65573485', '-73.90607141' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ethan-Allen-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6556607', '-73.88692855' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ericsson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72017524', '-73.94810682' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Carver-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6802972', '-73.92056485' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Willoughby-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69438605', '-73.94674491' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bath-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59464528', '-73.993567' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Stroud-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67500791', '-73.96192897' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kosciuszko-Pool',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69121683', '-73.94949066' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Curtis-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64094957', '-73.91742819' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bergen-Beach-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62240621', '-73.9095613' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'North-Pacific-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68530374', '-73.98212594' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jackie-Robinson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66581487', '-73.95923598' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'De-Hostos-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70269572', '-73.94930551' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Eleanor-Roosevelt-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69281522', '-73.93553181' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Remsen-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64229925', '-73.9073517' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Boerum-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68465569', '-73.99032743' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Chester-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66875437', '-73.91190816' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Houston-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67218638', '-73.90506774' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Woods-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67450299', '-73.92894183' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Duke-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66681059', '-73.89328454' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Livonia-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.663931', '-73.90200172' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'The-Cyclone',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.5743928', '-73.97771477' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Steeplechase-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57399878', '-73.98417781' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Friends-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61856591', '-73.97326425' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Chiarantano-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6358477', '-73.93309892' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Floyd-Patterson-Ballfields',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66087673', '-73.90408751' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'University-Place',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69117471', '-73.98161545' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Coney-Island-Creek-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.5814317', '-74.00380752' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Robert-E-Venable-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67440958', '-73.8652238' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Thomas-Boyland-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68185175', '-73.9077931' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Roberto-Clemente-Ballfield',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70633433', '-73.9677053' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jacobs-Ladder-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70488783', '-73.96700516' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ten-Eyck-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70929974', '-73.9493502' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hilltop-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67533709', '-73.91434718' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gateway-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68402494', '-73.96832609' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Umma-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65350437', '-73.96193259' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mother-Cabrini-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68432962', '-74.00475339' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lt-Federico-Narvaez-Tot-Lot',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64030722', '-73.96595928' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lott-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64815707', '-73.95408987' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sheepshead-Bay-Piers',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58319122', '-73.94478269' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Four-Sparrow-Marsh',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60084885', '-73.90557805' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Green-Central-Knoll',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70178963', '-73.93300752' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nehemiah-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66179989', '-73.90544379' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Carter-G-Woodson-Childrens-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66845639', '-73.90580694' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hattie-Carthan-Community-Garden',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68982582', '-73.94850474' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grand-Ferry-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71656299', '-73.96687606' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'George-Walker-Jr-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67861598', '-73.89512385' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harmony-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67794383', '-73.93443718' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Epiphany-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70854076', '-73.9655518' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Paerdegat-Basin-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62653861', '-73.90935686' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'South-Oxford-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68355225', '-73.97244097' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Valentino-Pier',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67835911', '-74.01832946' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sutter-Ballfields',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67115914', '-73.88757484' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lewis-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69540703', '-73.93789249' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brooklyn-Bridge-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69189576', '-74.00396709' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'American-Veterans-Memorial-Pier',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63970214', '-74.03781693' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hendrick-I-Lott-House',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61033124', '-73.9326463' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Old-Gravesend-Cemetery',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59451793', '-73.97462445' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bushwick-Inlet-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72281072', '-73.96202772' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'North-5th-Street-Pier-and-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72024169', '-73.96497941' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Berriman-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65646122', '-73.86995218' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Beaver-Noll-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69918338', '-73.93660253' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Betty-Carter-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68698465', '-73.97740998' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Maple-Street-Community-Garden',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66073596', '-73.95290697' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Greenpoint-Landing',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73665703', '-73.9601294' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bush-Terminal-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65109646', '-74.02224038' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Marks-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6745739', '-73.94049531' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'GREENSTREET',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.620123', '-73.91067389' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Babi-Yar-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57938311', '-73.95466767' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Schloss-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58277078', '-73.95698512' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ascenzi-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71447082', '-73.95695046' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jewel-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67695013', '-73.90055511' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Abingdon-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73734901', '-74.00536376' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ahearn-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71477009', '-73.98345801' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Allen-Mall-One',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72153161', '-73.98920165' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tribeca-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72021187', '-74.00570442' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bowling-Green',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70501245', '-74.0136767' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bryant-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75374975', '-73.98354866' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bennett-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85284064', '-73.93810413' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Central-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78248928', '-73.96556206' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Chelsea-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74991522', '-74.00064063' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Christopher-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73359615', '-74.00224294' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'City-Hall-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71303557', '-74.00612195' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cooper-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72883433', '-73.99076169' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Corlears-Hook-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71177674', '-73.97930471' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Carmansville-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82919627', '-73.94424779' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Coleman-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71062111', '-73.99419561' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dante-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77183726', '-73.9825781' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'A-Philip-Randolph-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80383341', '-73.95241207' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'De-Witt-Clinton-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76819027', '-73.99428711' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Donnellan-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8270274', '-73.94271731' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dorrance-Brooks-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81826248', '-73.94727339' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Duane-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71718438', '-74.0094065' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dyckman-House-Museum',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86746661', '-73.92287474' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Downing-Street-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72981391', '-74.0027258' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fort-Washington-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85609498', '-73.94047958' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fort-Tryon-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86198862', '-73.93278277' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Thomas-Paine-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71483345', '-74.002773' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Amelia-Gorman-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85567534', '-73.93239788' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Greeley-Square-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74861324', '-73.9883495' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hamilton-Fish-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71981192', '-73.98084412' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hancock-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80957864', '-73.95329743' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Colonel-Charles-Young-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8272144', '-73.93583847' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Herald-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75033309', '-73.98763467' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Highbridge-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84439061', '-73.93160645' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'James-J-Walker-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72977731', '-74.00611026' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harlem-River-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8062548', '-73.93390283' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Johnny-Hartman-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82411005', '-73.94861667' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Alexander-Hamilton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82307991', '-73.95124106' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Inwood-Hill-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87295533', '-73.9253609' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Isham-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86941652', '-73.91871482' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jackson-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7389712', '-74.00287421' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Vietnam-Veterans-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70252842', '-74.00984482' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Thomas-Jefferson-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79307081', '-73.93528922' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Joan-Of-Arc-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79435267', '-73.97638539' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Madison-Square-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74220407', '-73.98787209' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Theodore-Roosevelt-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78134864', '-73.97406014' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mitchel-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84004869', '-73.940038' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Montefiore-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82160457', '-73.95358665' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Morningside-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80690816', '-73.95804852' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marcus-Garvey-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80450636', '-73.9436634' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Park-Avenue-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74742763', '-73.98108949' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Plaza-Lafayette',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85154529', '-73.94159654' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lillian-D-Wald-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71198954', '-73.98426757' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Luther-Gulick-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71589777', '-73.98189237' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dr-Gertrude-B-Kelly-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74165591', '-74.00200283' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sophie-Irene-Loeb',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7132484', '-73.99427001' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Vesuvio-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72530713', '-74.00258842' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Queensboro-Oval',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75923266', '-73.96007378' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Riverside-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79668793', '-73.97603758' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Roger-Morris-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83450812', '-73.93850296' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Vartan-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74512959', '-73.97369762' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Nicholas-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81691316', '-73.94898431' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Catherines-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76520776', '-73.95872275' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Schiff-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71816674', '-73.98700348' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Carl-Schurz-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77491552', '-73.94377731' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Seward-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71476704', '-73.98918403' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sherman-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77735904', '-73.98235791' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Straus-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80182468', '-73.96824816' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Stuyvesant-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73382218', '-73.98442266' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sakura-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8130377', '-73.96210094' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tompkins-Square-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72643827', '-73.9816918' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Union-Square-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73598137', '-73.99042261' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lafayette-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80361613', '-73.95806333' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bennett-Rest',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85495631', '-73.93973207' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Haven-Avenue',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84843964', '-73.94296319' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Father-Duffy-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75907715', '-73.98499206' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Broadway-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78864918', '-73.97621188' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Adam-Clayton-Powell-Jr-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80546639', '-73.95088911' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Verdi-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77917172', '-73.98150452' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Washington-Square-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73088189', '-73.99759193' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'J-Hood-Wright-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84648035', '-73.94126363' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Worth-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74271431', '-73.98895434' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tony-Dapolito-Recreation-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72960406', '-74.00541853' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sara-D-Roosevelt-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72171154', '-73.99156575' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wards-Island-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78648151', '-73.9295807' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Louis-Cuvillier-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80086352', '-73.93087975' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Triboro-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80238303', '-73.93218604' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-103-CIII',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78708431', '-73.93906586' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Peter-Detmold-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75312444', '-73.96402944' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sutton-Parks',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75521334', '-73.96215178' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Twenty-Four-Sycamores-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75946833', '-73.9586911' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Andrew-Haswell-Green-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75964968', '-73.95762026' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sutton-Place-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75672657', '-73.96018543' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'East-River-Walk',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76559552', '-73.95143832' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'William-McCray-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81555096', '-73.93775117' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'James-Weldon-Johnson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79717358', '-73.94181086' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Joseph-C-Sauer-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72816072', '-73.9797357' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'ABC-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72179488', '-73.98603418' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'William-F-Passannante-Ballfield',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72857865', '-74.00223381' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-of-the-Americas',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7280073', '-74.00274386' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Captain-Jacob-Joseph-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71359034', '-73.98985676' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Peretz-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72280047', '-73.9875496' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'First-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72349427', '-73.98977571' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Minetta-Green',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73032364', '-74.00161101' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Minetta-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73067796', '-74.00130771' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'West-4th-Street-Courts',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73117689', '-74.00093631' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Minetta-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72989562', '-74.00185726' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Charlton-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7273391', '-74.00351389' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bushman-Steps',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83214169', '-73.94029854' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Recreation-Center-54',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75648619', '-73.96513384' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hansborough-Recreation-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81283478', '-73.93933328' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Little-Flower-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7124222', '-73.98818924' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bill-Bojangles-Robinson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82528525', '-73.93729142' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harlem-Lane-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82642635', '-73.93492812' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'White-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79163448', '-73.9458896' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Courtney-Callender-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81003682', '-73.94013739' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McKenna-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8383036', '-73.93908822' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Robert-Moses-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74840022', '-73.96929553' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Frederick-Johnson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8248034', '-73.93553233' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fred-Samuel-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8171601', '-73.93924232' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McCaffrey-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7589944', '-73.99128307' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Baruch-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71731544', '-73.9768306' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harlem-Art-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80104058', '-73.93881004' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Peck-Slip',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70757275', '-74.00136728' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Samuel-Marx-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80255151', '-73.95276334' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Petrosino-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72168478', '-73.99743971' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cherry-Clinton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71130711', '-73.98630392' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McCarthy-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73521508', '-74.00172523' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Honey-Locust-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76011092', '-73.96271063' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Catherine-Slip-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70949985', '-73.99614118' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lt-Wm-Tighe-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86562588', '-73.92831453' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Vladeck-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71246643', '-73.9820763' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Peter-Minuit-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79475375', '-73.94723408' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Samuel-N-Bennerson-2nd-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77380178', '-73.98693683' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Col-Young-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81932777', '-73.93565951' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marx-Brothers-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78431394', '-73.94612203' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Abe-Lebewohl-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73005223', '-73.98707148' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Abe-Lebewohl-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73007996', '-73.98778124' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Roosevelt-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8113407', '-73.95442547' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Father-Demo-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73020486', '-74.00212304' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Stanley-Isaacs-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7834523', '-73.94407681' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Abraham-Lincoln-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81223869', '-73.9372499' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Alfred-E-Smith-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71066244', '-73.99745628' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sidney-Hillman-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71521259', '-73.97963211' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-One',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71224462', '-73.99740779' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Monsignor-Kett-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86244405', '-73.92101024' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Booker-T-Washington-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80092046', '-73.96377353' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Anibal-Aviles-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80118366', '-73.96283608' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wald-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71972052', '-73.9768907' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Trygve-Lie-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74855551', '-73.97037667' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ralph-Bunche-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74932424', '-73.96975168' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dag-Hammarskjold-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75228489', '-73.9689083' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mary-OConnor-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74955691', '-73.97078586' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tudor-Grove-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7490543', '-73.97115587' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Moore-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8093837', '-73.93851013' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-One-Twenty-Five-CXXV',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8104918', '-73.9556413' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tanahey-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71016212', '-73.99518157' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Father-Fagan-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72674921', '-74.0033653' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Alice-Kornegay-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80641752', '-73.93534301' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Each-One-Teach-One',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8069298', '-73.93526397' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Crack-Is-Wack-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80435431', '-73.93169252' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mill-Rock-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78021653', '-73.93879805' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Nicholas-Playground-South',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81111361', '-73.94723114' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Nicholas-Playground-North',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81222757', '-73.9466339' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mae-Grant-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79246878', '-73.94944881' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Blake-Hobbs-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78911169', '-73.9439921' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cherry-Tree-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78723058', '-73.94724386' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Holcombe-Rucker-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82919126', '-73.93609581' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Howard-Bennett-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8136479', '-73.93866291' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'DeSalvio-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72163821', '-73.99610959' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tecumseh-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78181199', '-73.97851692' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Frederick-Douglass-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79707549', '-73.96753221' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gutenberg-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76347665', '-73.99015976' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grand-Canal-Court',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72231265', '-74.00501522' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jacob-H-Schiff-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82050359', '-73.95201666' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Straus-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71421095', '-73.98990597' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wagner-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79972362', '-73.93489' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Augustus-St-Gaudens-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73560179', '-73.98220643' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Peters-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73609705', '-73.98156169' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Henry-M-Jackson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71398652', '-73.98149852' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Happy-Warrior-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79542243', '-73.96853287' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Poor-Richards-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79250292', '-73.94264249' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Damrosch-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77222889', '-73.98501534' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lincoln-Center-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77289838', '-73.98374643' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wright-Brothers-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83168266', '-73.94176756' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Samuel-Seabury-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.785359', '-73.95082532' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Corporal-John-A-Seravalli-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73907289', '-74.00481021' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bloomingdale-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79925223', '-73.96597183' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Audubon-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84154803', '-73.93813923' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nathan-Straus-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7192021', '-73.98398025' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Collect-Pond-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71632334', '-74.00183206' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Eugene-McCabe-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80239026', '-73.9416219' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sol-Bloom-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78966145', '-73.96884184' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Renaissance-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82133485', '-73.94141409' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kimlau-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71341096', '-73.99803532' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-James-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71269688', '-73.99854254' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Penn-South-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74762498', '-73.99869909' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bleecker-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73641989', '-74.00548291' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gustave-Hartman-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72064081', '-73.98042725' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'James-Madison-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7114556', '-74.00037009' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Clement-Clarke-Moore-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74662882', '-74.00430467' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'East-River-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78935095', '-73.93821877' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McKinley-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72424822', '-73.98578748' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Chelsea-Recreation-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74829588', '-74.00222057' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bellevue-South-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74003657', '-73.97803445' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-Eighty-Nine-LXXXIX',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78866471', '-73.97188985' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Vincent-F-Albano-Jr-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74202417', '-73.97848564' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harlem-RBI',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78664413', '-73.94387553' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wagner-Houses-Pool',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80170035', '-73.93259449' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'The-Public-Theater',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7285437', '-73.99217831' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hells-Kitchen-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76297109', '-73.99258101' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Duarte-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72240441', '-74.00549368' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tramway-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76101724', '-73.96437803' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Septuagesimo-UNO',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77860776', '-73.98435364' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Convent-Garden',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82834517', '-73.94269634' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dr-Ronald-E-McNair-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80255086', '-73.93812615' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Asphalt-Green',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7784343', '-73.94405718' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sheridan-Square-Viewing-Garden',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73299683', '-74.0021321' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ramon-Aponte-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76145118', '-73.98934942' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pier-107-CVII',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78906161', '-73.93663691' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sunshine-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78851756', '-73.94788549' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ruppert-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78096207', '-73.95015128' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mercer-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72764268', '-73.99629579' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Gregorys-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78951809', '-73.97200753' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dream-Street-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80274542', '-73.93503516' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Abyssinian-Tot-Lot',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81719201', '-73.94084769' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'West-186th-Street-Basketball-Court',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85188314', '-73.93092812' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Washington-Market-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71711343', '-74.01159702' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Merchants-House-Museum',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72774506', '-73.99227403' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lower-East-Side-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72898784', '-73.98350075' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Riverside-Park-South',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7782714', '-73.99017259' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Robert-L-Clinkscales-Playground-and-Community-Garden',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82269998', '-73.94005721' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'The-High-Line',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74741056', '-74.00509982' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tribeca-Dog-Run',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71614943', '-74.01196325' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pier-42',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71039984', '-73.98262894' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'West-Harlem-Piers',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8179425', '-73.96250389' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pearl-St-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70781007', '-74.00396724' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Canal-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72529391', '-74.01042946' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Imagination-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70585701', '-74.00456598' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'East-River-Waterfront-Esplanade',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70142981', '-74.01120579' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'East-River-Waterfront-Esplanade-Zone-1',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70142981', '-74.01120579' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'East-River-Waterfront-Esplanade-Zone-2',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70142981', '-74.01120579' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fiorello-La-Guardia-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72801666', '-73.99880933' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mannahatta-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70432356', '-74.00725473' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Coenties-Slip',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70330786', '-74.01069874' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Spring-Street-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72515326', '-74.00442768' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Little-Red-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72934802', '-74.00211678' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Minerva-Bernardino-Greenstreet',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80281112', '-73.96407932' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dekovats-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7798179', '-73.94408973' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Alley-Pond-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74407126', '-73.74422607' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Alley-Athletic-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73978482', '-73.73631692' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grover-Cleveland-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71083732', '-73.91119339' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ashmead-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70291214', '-73.79027567' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Astoria-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77873714', '-73.9230952' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ralph-Demarco-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.783951', '-73.91764155' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Baisley-Pond-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67789315', '-73.78571057' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bowne-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77051604', '-73.80732223' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bayswater-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59782191', '-73.76868931' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brookville-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66152152', '-73.74415444' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Clearview-Park-Golf-Course',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78215463', '-73.78857111' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Little-Bay-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79047245', '-73.78813693' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Poppenhusen-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78126595', '-73.84459293' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Crocheron-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77036626', '-73.76735157' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'John-Golden-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77405054', '-73.76802058' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Veterans-Grove',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74271042', '-73.87753534' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Astoria-Heights-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76035844', '-73.91177381' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Forest-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69930971', '-73.86170548' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'The-Olde-Towne-of-Flushing-Burial-Ground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75453371', '-73.80241359' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gordon-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74877715', '-73.9519511' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Garlinge-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72833227', '-73.89093426' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cunningham-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72812162', '-73.77266091' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McLaughlin-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72554864', '-73.76626782' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Seven-Gables-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74419491', '-73.76641318' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rufus-King-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70370238', '-73.80397955' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kissena-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74580096', '-73.80850815' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Major-Mark-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71167475', '-73.78853395' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Park-Of-The-Americas',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74856436', '-73.86192138' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Laurelton-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68118193', '-73.72837954' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Beach-Channel-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58171088', '-73.84185224' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tribute-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58205406', '-73.83888373' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'William-F-Moore-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74368161', '-73.85551193' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Midland-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71698555', '-73.78455932' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lawrence-Virgilio-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74751773', '-73.91073493' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McKenna-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74658992', '-73.94409455' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mall-Eighteen',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78322855', '-73.84177301' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sabba-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74284851', '-73.91584015' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mall-Thirty-Four-XXXIV',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75714294', '-73.85544688' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rafferty-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74749937', '-73.94334365' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Neponsit-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57151133', '-73.85883868' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Benninger-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70707124', '-73.89827977' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Elmjack-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74430923', '-73.88999133' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Newtown-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73634244', '-73.86952669' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Poppenhusen-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78785632', '-73.84585057' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Proctor-Hopson-Circle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6978801', '-73.7862943' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Andrews-Grove',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74337696', '-73.95482779' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Josephine-Caminiti-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74389561', '-73.86155514' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Queens-Village-Veterans-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71804043', '-73.73588251' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rainey-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81876414', '-73.8976568' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rockaway-Beach',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58975824', '-73.76927826' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Albans-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69311998', '-73.7787939' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Captain-Tilly-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71207324', '-73.79888787' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Veterans-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66544447', '-73.73521132' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Clemens-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70005919', '-73.90588664' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sohncke-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7455048', '-73.90626912' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dunningham-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74635446', '-73.88357067' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Catharine-Turner-Richardson-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76830899', '-73.74724793' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nine-Heroes-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74553783', '-73.88908663' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Steinmann-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74517456', '-73.90914995' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fleetwood-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72269045', '-73.86719018' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Luke-J-Lang-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71856365', '-73.90240765' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'John-Vincent-Daniels-Jr-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74413549', '-73.91331154' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Triborough-Bridge-Playground-B',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77471237', '-73.92311774' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Triborough-Bridge-Playground-C',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77398876', '-73.92224223' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Triborough-Bridge-Playground-D',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77349583', '-73.92156861' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Triborough-Bridge-Playground-E',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77299864', '-73.92086348' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hoyt-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77156816', '-73.9172243' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Chappetto-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77495982', '-73.92238597' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pigeon-Paradise',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74864594', '-73.8965504' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'General-Hart-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74877829', '-73.89733301' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Middleburgh-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74131233', '-73.8750799' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Trolley-Car-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76228417', '-73.87242713' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Short-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74608979', '-73.94536497' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Plaut-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75836294', '-73.79719062' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Glendale-Veterans-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7018537', '-73.88082578' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Legion-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68640464', '-73.86663705' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wellbrock-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67888137', '-73.83362044' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Veterans-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75875874', '-73.87492426' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wayanda-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71075736', '-73.73899827' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jackie-Robinson-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70252554', '-73.85922025' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grand-Central-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71662625', '-73.80080711' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grand-Central-Parkway-Extension',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7227002', '-73.83625385' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tepper-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71872292', '-73.79156066' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gorman-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76238445', '-73.88423625' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Flushing-Fields',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77538354', '-73.81668941' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harvey-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78376191', '-73.82346942' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Federalist-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72679137', '-73.90056613' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Police-Officer-Edward-Byrne-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66733661', '-73.80736103' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tudor-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67324198', '-73.85470542' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gemini-Fields',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67039761', '-73.8523179' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Vito-Locascio-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67000892', '-73.8440833' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Belt-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66625502', '-73.79089961' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Locust-Grove-Civic-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66560502', '-73.82457105' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Southern-Fields',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66517252', '-73.82835881' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lefferts-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6653354', '-73.8202575' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Frank-D-OConnor-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74417492', '-73.88663083' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Flushing-Meadows-Corona-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72775841', '-73.83570349' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Flushing-Greens',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76314859', '-73.83110801' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Daniel-Carter-Beard-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76368645', '-73.82908899' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Middle-Village-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71009983', '-73.87360751' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Juniper-Valley-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72033734', '-73.88036388' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kennedy-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77167046', '-73.77938556' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Howard-Von-Dohlen-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69944672', '-73.81298124' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Daniel-M-OConnell-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69987525', '-73.75810061' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Springfield-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66183747', '-73.76158345' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Laurelton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67017089', '-73.73655424' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'One-Room-Schoolhouse-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7633824', '-73.87941736' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Police-Officer-Nicholas-Demutiis-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68180417', '-73.83929209' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Frederick-B-Judge-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68346628', '-73.80820353' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harvard-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70912027', '-73.78158333' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Junction-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7547011', '-73.87218233' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Astoria-Health-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76792723', '-73.93263895' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Myrtle-Avenue-Clemens-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70019987', '-73.90657992' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Francis-Lewis-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79654391', '-73.82494355' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marconi-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69367637', '-73.7954314' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'London-Planetree-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68614258', '-73.85324091' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Phil-Scooter-Rizzuto-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69478741', '-73.82158719' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Motor-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73594941', '-73.75942475' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Frank-Principe-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72752136', '-73.90487643' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pat-Williams-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71003213', '-73.72848218' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hempstead-Ballfield',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71027381', '-73.72933733' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hempstead-Bench-Spread',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70996154', '-73.7298999' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Breininger-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72577024', '-73.7289613' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cross-Island-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77306874', '-73.76456152' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McKee-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78723561', '-73.81582776' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-115',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78522853', '-73.85258023' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Columbus-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77011065', '-73.91760338' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Drumm-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69930528', '-73.88824034' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Barclay-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76137261', '-73.86700918' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Murray-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74723038', '-73.94882917' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jacob-Riis-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70197534', '-73.83493986' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ruoff-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68252915', '-73.85266342' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Catholic-War-Veterans-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67587556', '-73.81634234' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grand-Slope',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73450385', '-73.88288596' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Metro-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7044267', '-73.82617035' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Father-Reilly-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72272073', '-73.73614604' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'OSullivan-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76374988', '-73.88090307' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rockaway-Beach-and-Boardwalk',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58975824', '-73.76927826' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Beach-59th-St-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58975824', '-73.76927826' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Beach-30th-Street-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58975824', '-73.76927826' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Beach-17-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58975824', '-73.76927826' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Beach-9-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58975824', '-73.76927826' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rockaway-Beach-Boardwalk',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58975824', '-73.76927826' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Spring-Creek-Park-Addition',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65821487', '-73.85844694' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Alexander-Grey-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79515807', '-73.81372652' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Corona-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74978813', '-73.86225182' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'American-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74840364', '-73.86336445' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Michaels-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.758832', '-73.89998999' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tudor-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67382383', '-73.85366121' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mall-Forty-Two-XLII',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76212406', '-73.77402102' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jackson-Mill-Green',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76646414', '-73.87580272' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Corporal-Ruoff-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68048521', '-73.84418386' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'David-J-OConnell-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67655689', '-73.82065426' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Eight-Oaks-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70724713', '-73.82716897' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'MacDonald-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72214367', '-73.84656666' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Litchhult-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71595971', '-73.74489524' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lawrence-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75589775', '-73.81575056' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Maple-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75589713', '-73.82604859' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Queens-Valley-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72187585', '-73.82372135' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Studley-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76239979', '-73.80386105' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Leonard-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76411246', '-73.80975584' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Whitey-Ford-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77758498', '-73.93488411' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lt-Frank-McConnell-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69396551', '-73.82738606' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dutch-Kills-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75730824', '-73.93322439' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rockaway-Freeway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59040422', '-73.80073151' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Norelli-Hargreaves-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69016086', '-73.80883879' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dr-Charles-R-Drew-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68072134', '-73.80303363' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Foch-Sitting-Area',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67764689', '-73.80236499' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-One-Forty',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67510776', '-73.80130846' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Maple-Grove-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71193449', '-73.82401489' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Farm-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73580545', '-73.77736213' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Glenwood-Landing',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77512677', '-73.73997541' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fresh-Meadows-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74072752', '-73.78550875' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Calvary-Monument',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73086841', '-73.92975318' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Broad-Channel-Veterans-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61158096', '-73.81906791' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hallets-Cove-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77205206', '-73.93545387' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sergeant-Colyer-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67490693', '-73.80572194' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dwyer-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75388375', '-73.91507475' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Norelli-Hargreaves-Memorial-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69571644', '-73.80531949' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hollis-Veterans-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71029075', '-73.77132985' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Travis-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76691205', '-73.81311794' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Corporal-Frank-F-Fagan-Sq',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75603082', '-73.91240891' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lt-Clinton-L-Whiting-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68723491', '-73.85822934' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Veterans-Circle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57840604', '-73.84094165' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Alameda-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76431955', '-73.74484572' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Westbourne-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60792871', '-73.76440739' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Court-Square-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74635141', '-73.94335726' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bell-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75459891', '-73.76670052' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Patricia-A-Brackley-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58139901', '-73.8456583' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'South-Gate-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6733847', '-73.75852095' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nakks-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70818998', '-73.74283205' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: '225-Street-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67354961', '-73.74734189' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sixteen-Oaks-Grove',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75853143', '-73.93835707' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Al-Stabile-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67729513', '-73.835461' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pinocchio-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70552622', '-73.87523926' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Uncle-Vito-F-Maranzano-Glendale-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70490513', '-73.88175232' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Starr-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70981142', '-73.91779758' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Saul-Weprin-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74804141', '-73.77641211' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Utopia-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7307146', '-73.7924142' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-Thirty-Five-XXXV',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75484606', '-73.92203724' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Paul-Raimonda-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77281023', '-73.89743705' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Overlook-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77070812', '-73.87238637' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kissena-Corridor-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74702909', '-73.8198458' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Holy-Cow-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74081532', '-73.77878105' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jamaica-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69323306', '-73.79097412' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Evergreen-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69753615', '-73.89699992' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Travers-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75395392', '-73.88934309' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ehrenreich-Austin-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71551793', '-73.83683403' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mafera-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70682733', '-73.89130638' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'The-Painters-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72052427', '-73.86007032' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Delphin-H-Greene-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68493068', '-73.72906305' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bowne-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75819403', '-73.82482879' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jamaica-Bay-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61994138', '-73.77010417' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Glen-Oaks-Oval',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74952533', '-73.71561276' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Arverne-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59285679', '-73.78518621' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fresh-Meadows-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73413594', '-73.79620794' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Captain-Dermody-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75580111', '-73.76456394' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tall-Oak-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7461578', '-73.75819607' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-Eighty-LXXX',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74473267', '-73.70956297' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Annadale-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73112915', '-73.85181858' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Vleigh-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72982773', '-73.8165127' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Van-Alst-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77063125', '-73.9281637' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bellaire-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72160477', '-73.75801013' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gladys-Warren-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7072908', '-73.76424419' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bland-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75827113', '-73.83113246' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Castlewood-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74930159', '-73.72238364' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bellerose-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73279906', '-73.71795205' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pomonok-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73611769', '-73.81386227' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Locust-Manor-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68609847', '-73.75637785' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Woodtree-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77750804', '-73.90237845' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ravenswood-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76292378', '-73.93524357' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-Twenty-One',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77828131', '-73.7984922' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Russell-Sage-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7239082', '-73.85152872' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Judge-Moses-Weinstein-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71826962', '-73.82058884' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Maurice-A-FitzGerald-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69031126', '-73.83976606' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cambria-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68932479', '-73.74293655' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Torsney-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74727934', '-73.92177904' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Latham-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74188775', '-73.89795091' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sherry-Dog-Run',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74137443', '-73.89876121' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Spargo-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74131493', '-73.89728448' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Crosson-Green',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74230446', '-73.89668881' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Electric-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73592884', '-73.80534768' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Whitestone-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79201544', '-73.80851694' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Emerald-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73105776', '-73.80594272' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Redfern-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61127714', '-73.74945443' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Challenge-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75656588', '-73.72802133' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Colden-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7702432', '-73.82721862' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Willow-Lake-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72260571', '-73.83712789' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Telephone-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7384847', '-73.75659348' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Peters-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73609705', '-73.98156169' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hillside-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74084611', '-73.71312421' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grassmere-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59927764', '-73.75894554' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-Seventy-Five',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72642498', '-73.80817349' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Strippoli-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75720605', '-73.90758266' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Alley-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74717452', '-73.74513608' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Real-Good-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73555654', '-73.8573449' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Barrier-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73623018', '-73.85497775' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Turtle-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74213374', '-73.82735537' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nassau-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76475695', '-73.72483671' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nassau-Mall-South',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7632029', '-73.72601644' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Haggerty-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71295155', '-73.75766463' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hull-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72542243', '-73.90146046' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Technical-Sergeant-Thomas-J-Davey-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72636958', '-73.90062757' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Whitefish-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72516591', '-73.89879172' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Peter-Chahales-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72485995', '-73.89430187' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Crowley-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72929024', '-73.88029236' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Frontera-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72466405', '-73.89530819' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hoffman-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73285958', '-73.87201871' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sitting-Area-127-CXXVII',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7250469', '-73.89205258' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Quick-Brown-Fox-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72752197', '-73.88875036' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bridge-and-Tunnel-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74194145', '-73.95151588' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Moore-Homestead-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74208959', '-73.88216091' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-Ninety',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7573229', '-73.87858479' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Northern-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75607485', '-73.87456151' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marie-Curie-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75698984', '-73.77173692' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hammel-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58820808', '-73.80931362' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Louis-Pasteur-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76201525', '-73.73542164' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Freedom-Square-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72317491', '-73.82025436' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rockaway-Community-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59821939', '-73.78126116' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'East-Elmhurst-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76548062', '-73.87092857' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Willets-Point-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78382548', '-73.79634994' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cedar-Grove-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73704711', '-73.82372977' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-Sixty-Two-LXII',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73607523', '-73.85290234' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ampere-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68152286', '-73.85695705' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Briarwood-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71028913', '-73.81107772' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Francis-Lewis-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76052644', '-73.78407143' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cardozo-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59322469', '-73.78657477' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Middle-Village-Veterans-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71446764', '-73.87727832' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Centreville-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67028332', '-73.83904082' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bayside-Fields',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77216747', '-73.78537844' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Clearviews-Tail',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7247168', '-73.75541737' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Baybridge-Green',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78610284', '-73.78728905' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Linnaeus-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75383387', '-73.75068905' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bayside-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58481516', '-73.82515423' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Clintonville-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78306028', '-73.80733876' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Joseph-Austin-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71588577', '-73.80071306' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Idlewild-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65254524', '-73.75490071' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'LaGuardia-Landing-Lights',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76208837', '-73.88992435' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Conch-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59601907', '-73.78078222' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Steinway-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77641062', '-73.90345082' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Montbellier-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6746818', '-73.75652668' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Auburndale-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76578611', '-73.79428589' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rosemarys-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70472963', '-73.90394986' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bay-Terrace-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78231777', '-73.77760698' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Oakland-Gardens',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75360389', '-73.75982151' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lost-Battalion-Hall-Recreation-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73220898', '-73.86517971' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Latimer-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69641613', '-73.78623221' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Beach-Channel-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58895345', '-73.80583562' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'East-Springfield-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6985974', '-73.73997336' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hollis-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70650851', '-73.75311451' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Springfield-Park-North',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66408113', '-73.75976059' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lanett-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59951111', '-73.74409349' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harold-Schneiderman-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.66521759', '-73.8504859' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hinton-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75613351', '-73.85499359' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Douglaston-Park-Golf-Course',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75186671', '-73.7326526' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Railroad-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8250604', '-73.91547985' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rochdale-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6747034', '-73.77448182' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rocket-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67068469', '-73.84624744' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Louis-Armstrong-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75541669', '-73.85572779' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hart-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74877829', '-73.89733301' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Walter-Ward-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65773446', '-73.84388113' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Seaside-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58061626', '-73.83091189' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Reiff-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71862364', '-73.90173204' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Judge-Angelo-Graci-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67447619', '-73.85875655' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Yellowstone-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72625097', '-73.84761847' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'North-Rochdale-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67997742', '-73.77494806' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'South-Rochdale-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67379817', '-73.76912125' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Horace-Harding-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73322241', '-73.86053216' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Spirit-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76129943', '-73.9414393' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sunrise-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65266173', '-73.73637907' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Long-Island-Mews',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73611571', '-73.89009294' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Vernon-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74230306', '-73.95414629' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Athens-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76765602', '-73.92246652' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Murray-Hill-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76165879', '-73.81183171' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Private-William-Gray-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75788097', '-73.87081212' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fisher-Pool',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75853582', '-73.86941137' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Almeda-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59341318', '-73.79469266' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Seans-Place',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76048067', '-73.91833901' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Frank-Golden-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78468298', '-73.83348169' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sorrentino-Recreation-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60243532', '-73.75138042' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brinkerhoff-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.69572643', '-73.78216413' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Roy-Wilkins-Recreation-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68747011', '-73.77184243' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Corona-Golf-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74758268', '-73.85460581' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Underbridge-Dog-Run',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73386933', '-73.84520086' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Udalls-Park-Preserve',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77266714', '-73.74478195' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Queens-Farm-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74730093', '-73.72235532' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hook-Creek-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64626306', '-73.74167952' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gene-Gray-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60624268', '-73.81918507' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'College-Point-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78564216', '-73.84648804' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fort-Totten-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79238807', '-73.77698992' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dubos-Point-Wildlife-Sanctuary',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59967332', '-73.7924583' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Broad-Channel-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60097354', '-73.81980913' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Powells-Cove-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.78931963', '-73.8345288' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Manuel-De-Dios-Unanue-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74758232', '-73.88278071' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cornell-Burial-Ground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60009365', '-73.74962481' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brant-Point-Wildlife-Sanctuary',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59853885', '-73.80245439' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Socrates-Sculpture-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76870481', '-73.93694445' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Broad-Channel-American-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59600016', '-73.82303153' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Louis-Armstrong-Community-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75727961', '-73.86135985' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Seagirt-Ave-Wetlands',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59678022', '-73.74021998' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hunters-Point-South-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73811303', '-73.96272172' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Vernam-Barbadoes-Peninsula',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59391682', '-73.80563216' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Simeone-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74097568', '-73.85990081' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'College-Point-Fields',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77645085', '-73.83690815' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Broad-Channel-Wetlands',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61146789', '-73.82192456' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Remsen-Family-Cemetery',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71245565', '-73.85853963' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Southside-Burial-Ground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.67069641', '-73.84413726' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Prospect-Cemetery',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70143005', '-73.79972897' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Corona-Health-Sanctuary',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74379941', '-73.85834091' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Carlos-R-Lillo-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.77061254', '-73.89355722' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Elmhurst-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7300262', '-73.88508138' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Flight-587-Memorial-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57793885', '-73.83616021' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Park-at-Beach-108-Street',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58317694', '-73.83470697' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lewis-H-Latimer-House',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76612887', '-73.82963135' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sunset-Cove-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59722442', '-73.8240031' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sergeant-Collins-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75162218', '-73.90324726' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lt-Michael-R-Davidson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74850461', '-73.91371148' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Copernicus-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72591723', '-73.90599289' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Old-Hickory-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74160385', '-73.95411478' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gwirtzman-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57532285', '-73.86320647' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Triangle-54-Greenstreet',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73082262', '-73.91896856' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Answer-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74861047', '-73.87362024' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Greenstreet-OConners-Tail',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74486552', '-73.88726586' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lost-Community-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74976972', '-73.70645407' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Joseph-Caminetti-Greenstreet',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74206131', '-73.85342448' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Invictus-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71592452', '-73.78832459' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kingsford-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71220026', '-73.78869657' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mgsr-Arcese-Tri',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68145612', '-73.84833992' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Haym-Sol-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72587732', '-73.82111927' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hillcrest-Veterans-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72129643', '-73.80545403' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Greenstreet-ABE-WOLFSON',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.72815076', '-73.81500396' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dickson-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68341804', '-73.85604822' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Erewhon-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75182657', '-73.79199553' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cooper-Veterans-Memorial',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70939076', '-73.86997974' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Atlantis-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74120659', '-73.79207302' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Musical-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7351029', '-73.89625055' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Veterans-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.65690146', '-73.90387258' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tustin-Tri',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76899723', '-73.79220379' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Chaplain-Rock-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.76474859', '-73.76162829' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Montauk-Memorial-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.68297895', '-73.76002194' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Benigno-Aquino-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.7138171', '-73.77691808' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Liberty-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.70315597', '-73.76683703' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Chris-Postiglione-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73811433', '-73.79534868' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mitchell-Wallace-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.75260126', '-73.75927427' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nathaniel-Hawthorne-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.74351818', '-73.76578441' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Frank-P-Locicero',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.73394187', '-73.7233974' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nathaniel-Schneider-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.71277282', '-73.85932917' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pleasant-Plains-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.52394257', '-74.21606665' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Barrett-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62532172', '-74.11564869' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Barrett-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64179017', '-74.07581554' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Clove-Lakes-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61741815', '-74.11170624' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Conference-House-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.4983548', '-74.2392378' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Faber-Pool-and-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64095062', '-74.13578232' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Amundsen-Circle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.56462118', '-74.13105986' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Staats-Circle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59923566', '-74.07243813' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hero-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6304983', '-74.08811806' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'White-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60757217', '-74.06312891' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'LaTourette-Park-and-Golf-Course',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57690454', '-74.15019238' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Walker-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64326255', '-74.10944175' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Great-Kills-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.55608647', '-74.10385987' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Freshkills-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.56786754', '-74.17688239' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Greenbelt-Native-Plant-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59619534', '-74.18133067' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Veterans-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61158096', '-73.81906791' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Egbert-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62510682', '-74.14453379' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Forest-Mall',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63099621', '-74.09156118' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Silver-Lake-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62260192', '-74.1014636' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tompkinsville-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63739835', '-74.07641592' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mahoney-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64343626', '-74.08576171' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dugan-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.5614211', '-74.11081487' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Long-Pond-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.51129329', '-74.22575367' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Aesop-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.50951017', '-74.22989818' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tappen-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62681777', '-74.07687607' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Westerleigh-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61983857', '-74.13448435' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Willowbrook-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59690023', '-74.15417638' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wolfes-Pond-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.51806531', '-74.18822063' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Maple-Woods',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61115179', '-74.08817673' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Levy-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63400446', '-74.12893427' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Austin-J-McDonald-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62963448', '-74.1153178' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'De-Matti-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61447705', '-74.07425043' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mariners-Harbor-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63649295', '-74.16047027' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Liotti-Ikefugi-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63874351', '-74.08389268' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Midland-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57446338', '-74.0988334' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Midland-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57611705', '-74.09853185' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lyons-Pool',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63715866', '-74.0743322' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Schmul-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58890931', '-74.1863635' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Willowbrook-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.56522579', '-74.13080302' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jones-Woods-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63871767', '-74.08913346' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Forest-Grove',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62701089', '-74.17405634' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Carlton-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.55186657', '-74.1844277' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Von-Briesen-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60767429', '-74.05888146' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dodgers-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61479813', '-74.11950723' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Stapleton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62325566', '-74.0796413' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Arrochar-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59782607', '-74.07062745' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Old-Town-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59541984', '-74.08140688' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Christopher-J-Igneri-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60870101', '-74.1198181' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Richmond-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58818596', '-74.12169752' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'North-Shore-Esplanade',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64739301', '-74.08032309' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gen-Douglas-MacArthur-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58677755', '-74.10025879' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'The-Big-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63086198', '-74.1644666' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Terrace-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61367516', '-74.09853506' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cloves-Tail',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61317239', '-74.11369034' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Great-Kills-Veterans-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.54709121', '-74.15190844' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Clawson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.56050504', '-74.12361559' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Naples-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60253193', '-74.09027401' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Father-Macris-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61675394', '-74.16174352' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Westwood-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60638998', '-74.14186595' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ingram-Woods',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6091788', '-74.13661408' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sports-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60949601', '-74.11984363' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bradys-Pond-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60554749', '-74.07958192' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Markham-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62350023', '-74.14607041' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-George-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64455188', '-74.07790544' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Northerleigh-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.6228093', '-74.1340868' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lemon-Creek-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.51666851', '-74.19984346' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Annadale-Green',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.54140553', '-74.17771733' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Davis-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64223945', '-74.08576019' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dongan-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58255221', '-74.08900275' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'High-Rock-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.5828142', '-74.12412973' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Greencroft-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.55179124', '-74.1364446' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lieutenant-John-H-Martinson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.53685894', '-74.16263624' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ida-Court',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.53831577', '-74.18726055' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Drumgoole-Tot-Lot',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.54932677', '-74.17989428' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wegener-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.55257091', '-74.17623825' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'South-Shore-Country-Club',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.55005521', '-74.20530756' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Prall-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62860412', '-74.11807526' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bloomingdale-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.53209438', '-74.21467867' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'New-Dorp-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.56979969', '-74.11846017' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tottenville-Pool',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.50544888', '-74.23604209' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lt-Lia-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64357348', '-74.07981451' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Meredith-Woods',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59880105', '-74.18741764' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jennifers-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62005569', '-74.16311549' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Deere-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60646638', '-74.10941575' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Reeds-Basket-Willow-Swamp-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59895758', '-74.10515312' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Blue-Heron-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.53044102', '-74.17377757' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Arden-Woods',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.55460049', '-74.18932585' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Siedenburg-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.55662897', '-74.14389103' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pralls-Island',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60885793', '-74.20052868' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Skyline-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63943563', '-74.0896636' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Eibs-Pond-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61027971', '-74.0818365' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lopez-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61149152', '-74.08503273' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gaeta-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60997281', '-74.1472187' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Joseph-Manna-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62574372', '-74.17695728' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Shooters-Island',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64263471', '-74.15953716' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Saw-Mill-Creek-Marsh',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60703474', '-74.19422197' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Huguenot-Ponds-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.53046337', '-74.18983602' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bunker-Ponds-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.52229412', '-74.18272022' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Arbutus-Woods-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.52853986', '-74.18550306' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Crescent-Beach-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.53589554', '-74.14642026' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hybrid-Oak-Woods-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.5033666', '-74.23488962' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bayview-Terrace-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.52634569', '-74.16421342' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kingdom-Pond-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.52507198', '-74.18447276' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tottenville-Shore-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.51014933', '-74.25263507' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'King-Fisher-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.56267445', '-74.15077113' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Graniteville-Swamp-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62448274', '-74.17439377' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Staten-Island-Industrial-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61153737', '-74.17341978' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sobel-Court-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61501997', '-74.08386943' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Seaside-Wildlife-Nature-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.54022019', '-74.14178504' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'South-Beach-Wetlands',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58714385', '-74.0730394' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Last-Chance-Pond-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58517688', '-74.09826614' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ocean-Breeze-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57942235', '-74.08577851' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Graniteville-Quarry-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62553305', '-74.1546406' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Isle-Of-Meadows',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57650848', '-74.203829' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fairview-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.5322376', '-74.23027487' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Richmond-Terrace-Cemetery',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63929926', '-74.12092218' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'South-Clove-Road-Cemetery',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60879655', '-74.09144867' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sylvan-Grove-Cemetery',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.59144727', '-74.19205806' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sleight-Family-Graveyard',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.55677474', '-74.21188793' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fort-Hill-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64110127', '-74.08176377' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Old-Place-Creek-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.61642968', '-74.18163401' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Heritage-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.64086795', '-74.12242604' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Laredo-Avenue-Parcel',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.54862211', '-74.17394389' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Olmsted-Beil-House-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.53196835', '-74.15813274' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Targee-Street-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.60858733', '-74.08767003' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Blueberry-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.52821192', '-74.16078536' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Manor-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.58818244', '-74.12779681' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Goodhue-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.63481265', '-74.09951365' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Stapleton-Esplanade',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.62737773', '-74.07341413' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brookfield-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.56016877', '-74.16969624' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'War-Memorial',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.57631118', '-74.12698858' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Aqueduct-Walk',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86337146', '-73.90354954' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Barnhill-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86812708', '-73.89967931' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bronx-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84889079', '-73.87712839' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pelham-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85767658', '-73.86196028' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bronx-River-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88739735', '-73.86603112' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bergen-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85470267', '-73.90133501' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Castle-Hill-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81095234', '-73.84653277' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Claremont-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84030079', '-73.90732804' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Monsignor-Raul-Del-Valle-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82074105', '-73.89069172' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Crotona-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8390738', '-73.89305094' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tremont-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84520969', '-73.8951795' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Crotona-Parkway-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8454073', '-73.88469082' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Church-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8298885', '-73.85028432' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Devoe-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86315304', '-73.90655566' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Horseshoe-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82412874', '-73.89771974' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Joseph-Rodman-Drake-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81029482', '-73.8824501' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Echo-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84988457', '-73.90614161' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ewen-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88220425', '-73.91000528' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fort-Independence-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88204102', '-73.8940583' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Drew-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83314203', '-73.90334126' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Benjamin-Gladstone-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82531454', '-73.89106972' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Graham-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81064669', '-73.92749986' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hugh-J-Grant-Circle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83313066', '-73.86095261' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hines-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82848951', '-73.90578654' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Joyce-Kilmer-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82848382', '-73.92265315' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lyons-Square-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82276868', '-73.88805044' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Macombs-Dam-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82752368', '-73.92847287' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'McKinley-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83110258', '-73.90069681' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mosholu-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8821214', '-73.88545421' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mullaly-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83346039', '-73.92380956' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Muller-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86251294', '-73.89813893' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Murphy-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85118437', '-73.89329508' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'OBrien-Oval',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84788872', '-73.90132178' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Washingtons-Walk',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87468496', '-73.90092736' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pelham-Bay-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85861165', '-73.80270733' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Poe-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86461697', '-73.89474154' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pulaski-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80522809', '-73.92456494' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rose-Hill-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86220541', '-73.8901273' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ryan-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81534679', '-73.92435674' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-James-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86522985', '-73.89783887' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Seton-Falls-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88692011', '-73.83858902' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Franz-Sigel-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82336584', '-73.92543118' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Schneider-Sampson-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83682875', '-73.82601585' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'University-Woods',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85931502', '-73.91485901' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'ONeill-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82370282', '-73.91140162' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brust-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88990266', '-73.90363814' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Michel-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83885471', '-73.90602467' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Keltch-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84067186', '-73.91770324' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sergeant-Johnson-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85797388', '-73.88128549' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sheridan-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.90491506', '-73.89670854' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Flood-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85834925', '-73.89086501' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Beatty-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83155609', '-73.90176564' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Martin-Luther-King-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8382888', '-73.92336615' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bryant-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82663315', '-73.88852935' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Woodrow-Wilson-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81346814', '-73.85806643' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'DAuria-Murphy-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85321908', '-73.8891368' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hutton-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85230802', '-73.8901396' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Heath-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8687922', '-73.90755157' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Whalen-Grove',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85106632', '-73.88588228' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Young-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83984274', '-73.87081686' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Featherbed-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84641672', '-73.92092269' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Franklin-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82712427', '-73.90729853' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Major-General-John-R-Brown-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86962839', '-73.90417169' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Henry-Hudson-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88091299', '-73.92086693' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mount-Eden-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84292761', '-73.91000834' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'University-Malls',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84978733', '-73.91642742' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'DOnofrio-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88099122', '-73.8644408' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Slattery-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85730656', '-73.89849322' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Charlton-Garden',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82470674', '-73.90710285' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Zimmerman-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86616776', '-73.86874469' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pugsley-Creek-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81384024', '-73.85178207' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Spuyten-Duyvil-Shorefront-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87864115', '-73.92117956' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Van-Nest-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.843437', '-73.86584261' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Williamsbridge-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87705675', '-73.86672805' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rita-Ley-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.89911976', '-73.87321043' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hutchinson-River-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85140756', '-73.83639958' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Samuel-H-Young-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8415685', '-73.83874185' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ciccarone-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85595063', '-73.88672599' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Peoples-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80953539', '-73.91708672' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Williamsbridge-Oval',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87759834', '-73.87744127' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jerome-Slope',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83242186', '-73.92591754' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Garrison-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81757252', '-73.9283033' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hawkins-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84658914', '-73.78646489' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Henry-Hudson-Parkway',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.90078122', '-73.89956387' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hackett-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.9012882', '-73.90516102' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bell-Tower-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88925059', '-73.90837978' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cedar-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85507224', '-73.91748628' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hilton-White-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82286814', '-73.90731265' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hunts-Point-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81413755', '-73.88591114' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Goble-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8437557', '-73.91701642' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mott-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83143813', '-73.91465642' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rev-J-Polite-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82709829', '-73.89708721' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Soundview-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81189941', '-73.86680739' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Alexanders-Alley',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81150127', '-73.92322767' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bufano-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83820278', '-73.83112633' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Colucci-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85282575', '-73.83461781' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Noble-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83743014', '-73.87228974' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Watson-Gleason-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82843527', '-73.86897251' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ferry-Point-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81572208', '-73.82982124' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Devanney-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8525074', '-73.9044203' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Barry-Plaza',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84314333', '-73.90480409' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Lozada-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80790406', '-73.9249467' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Derosa-OBoyle-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82254466', '-73.81904177' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Freeman-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82931259', '-73.88787567' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harris-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87627294', '-73.89188852' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jerome-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87946207', '-73.89133721' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-One-Thirty-Four-CXXXIV',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80346947', '-73.91774828' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gouverneur-Morris-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80468114', '-73.91274567' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rienzi-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88762957', '-73.8585999' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Riverdale-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.89058131', '-73.91996841' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Flynn-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82104885', '-73.91193946' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Starlight-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82832411', '-73.88478367' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Daniel-Boone-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8295675', '-73.88594663' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Plimpton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84399375', '-73.92231447' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bridge-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8442671', '-73.92419162' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Featherbenches',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8455028', '-73.91473497' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Inwood-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84477197', '-73.91530753' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jennie-Jerome-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84553092', '-73.91343716' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Jerome-Playground-South',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84493634', '-73.91372335' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Walton-Slope',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84523732', '-73.91158823' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Morris-Mesa',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84531134', '-73.90971908' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Peace-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84514521', '-73.90527053' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Admiral-Farragut-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84297503', '-73.89196151' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Prospect-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84326707', '-73.89070405' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fairmount-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84276546', '-73.88964117' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Boone-Slope',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83737757', '-73.88230354' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'St-Lawrence-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83495739', '-73.86762' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wood-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83516964', '-73.8653973' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Virginia-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83429186', '-73.86231295' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Virginia-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8334937', '-73.86211339' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Chief-Dennis-L-Devlin-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83197725', '-73.85478464' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Havemeyer-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82992327', '-73.84799692' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Miele-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83447923', '-73.82636661' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fordham-Landing-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8646612', '-73.90960324' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Siren-Slope',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87669356', '-73.90388648' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Crescent-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87981046', '-73.90213301' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cooney-Grauer-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8802914', '-73.90145507' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bailey-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88164566', '-73.90038245' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Van-Cortlandts-Tail',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88607848', '-73.89973044' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'PO-Serrano-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82340598', '-73.85100863' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Vinmont-Veteran-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.9024586', '-73.90491026' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Merriam-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83882693', '-73.92661471' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Melrose-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82043777', '-73.91840771' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Patterson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81575429', '-73.92248765' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Eastchester-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86980291', '-73.85278354' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mazzei-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86259193', '-73.85837298' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Sedgwick-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84559837', '-73.92341067' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-174',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83438438', '-73.87781369' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Caserta-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83736385', '-73.85398006' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gun-Hill-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87469704', '-73.86549423' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Loreto-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84905631', '-73.85211905' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dawson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81952173', '-73.89824134' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Edenwald-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88435633', '-73.84490739' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Behagen-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82530737', '-73.9014139' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Nelson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83476796', '-73.92683867' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Agnes-Haywood-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88034073', '-73.86184752' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'The-Pearly-Gates',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83873111', '-73.84555763' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Spuyten-Duyvil-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88703561', '-73.91575261' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Allerton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86596955', '-73.85052982' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Webster-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8593496', '-73.89291129' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Riverbend-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87231443', '-73.90576518' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Taylor-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83904668', '-73.86614162' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Castle-Hill-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83919466', '-73.8532828' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Matthews-Muliner-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8469653', '-73.86153642' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Playground-52-LII',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81513317', '-73.9015804' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Millbrook-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80433492', '-73.91663585' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bruckner-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8267539', '-73.82860183' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Dunbar-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82303174', '-73.90644391' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Riverdale-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88760786', '-73.91476681' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Givan-Square',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86815016', '-73.84286147' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wakefield-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.90178283', '-73.8546376' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tiffany-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82485118', '-73.89436525' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bicentennial-Veterans-Memorial-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82295622', '-73.81402239' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Stars-and-Stripes-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8854949', '-73.8396163' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Captain-Rivera-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81793056', '-73.90688824' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Colgate-Close',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8241099', '-73.88149645' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Haffen-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87368475', '-73.83916441' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mosholu-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87199124', '-73.88315383' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Clark-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81374133', '-73.92136744' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Seton-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88596832', '-73.91656084' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Marble-Hill-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87756444', '-73.90814766' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Randall-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8193651', '-73.849591' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Story-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82297779', '-73.86285828' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Black-Rock-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82840049', '-73.85796763' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Morgan-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83227397', '-73.90744964' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pontiac-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81422243', '-73.90823697' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Haviland-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82905202', '-73.85861123' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Wave-Hill',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.89867082', '-73.91249836' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Stebbins-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82277912', '-73.89852439' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Magenta-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87374751', '-73.86786689' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Valentine-Varian-House',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87732623', '-73.87946016' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Abigail-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81713996', '-73.9045663' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Willis-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81089058', '-73.92298223' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Arcilla-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8270884', '-73.91429309' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Space-Time-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82232702', '-73.85987041' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Gouverneur-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83575321', '-73.90342184' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'MacLaughlin-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88791118', '-73.90536442' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'I-Am-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81129168', '-73.91018417' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Burns-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86318627', '-73.83657841' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fountain-Of-Youth-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81377737', '-73.9053726' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grove-Hill-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81989478', '-73.90883819' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mapes-Pool',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84662868', '-73.88631723' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Saw-Mill-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80889852', '-73.91935569' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Castle-Hill-Little-League-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83244243', '-73.84396941' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Youth-Village',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82867022', '-73.90294778' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Estella-Diggs-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82896754', '-73.90615027' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grand-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85603156', '-73.90723606' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Brook-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80956359', '-73.91868859' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Kingsbridge-Heights-Community-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87756366', '-73.90068873' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Co-op-City-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87597705', '-73.823697' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Bathgate-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85221971', '-73.89439097' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ambrosini-Field',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84448451', '-73.7842438' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Pelham-Bay-Little-League',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.841531', '-73.83940742' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mount-Hope-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85033185', '-73.90948171' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Cleopatra-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84538306', '-73.90432576' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Raoul-Wallenberg-Forest',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.88760064', '-73.91768624' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Julio-Carballo-Fields',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81558155', '-73.8892338' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'West-Bronx-Recreation-Center',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84399813', '-73.91949947' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Harding-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80999495', '-73.85675745' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Quarry-Ballfields',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85094818', '-73.89098347' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Field-Of-Dreams-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82659219', '-73.89227788' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Galileo-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84856675', '-73.91563593' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Vidalia-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84333814', '-73.88140682' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Givans-Creek-Woods',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87925465', '-73.82991146' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Grant-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8375076', '-73.91237953' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rock-Garden-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83529275', '-73.88506536' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mount-Hope-Garden',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85255181', '-73.90537522' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Boston-Garden',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.86571324', '-73.86185118' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'City-Island-Wetlands',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84883963', '-73.79099253' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Stop-and-Go-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84513554', '-73.89877331' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Beanstalk-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85381109', '-73.91676694' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Printers-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82422836', '-73.89096147' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Rev-Lena-Irons-Unity-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83103991', '-73.90665552' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ogden-Plimpton-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8418927', '-73.92372004' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'West-Farms-Rapids',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84155572', '-73.87752267' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mapes-Ballfield',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84732964', '-73.88578367' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Longfellow-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8255965', '-73.88753788' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Walton-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85524637', '-73.90520165' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Morris-Garden',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85462231', '-73.90401871' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Palmer-Inlet',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84391359', '-73.81727399' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Half-Nelson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84676482', '-73.91929077' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Davidson-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85506911', '-73.90770359' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Thorpe-Family-Playground',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.85623262', '-73.89489345' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Tiffany-Street-Pier',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80582334', '-73.89033589' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Concrete-Plant-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82689562', '-73.88483598' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Barretto-Point-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80555301', '-73.88817449' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'North-Brother-Island',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.80085346', '-73.89850846' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'South-Brother-Island',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.79639029', '-73.89808736' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Locust-Point-Marina',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81371634', '-73.80550159' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'West-Farms-Soldiers-Cemetery',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84367384', '-73.87922791' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Ferris-Family-Burial-Plot',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.83885154', '-73.84221953' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mohegan-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.84429367', '-73.88472966' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Risse-Street-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.87840942', '-73.88529552' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Hunts-Point-Riverside-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81770642', '-73.88132732' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Mill-Pond-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8229924', '-73.93189254' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'River-Avenue-Parks',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82528446', '-73.92699711' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'A-Badillo-Community-Rose-Garden-and-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82489587', '-73.91315019' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Yolanda-García-Park',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.82271145', '-73.9143876' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: '5-Borough-Shops',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8023098', '-73.90993095' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Fufidio-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81359939', '-73.89132878' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Deegan-Rock',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.81316931', '-73.93073954' ] }
        }
        ,
        {
          type: 'Feature',
          properties: {
            'marker-color': '#7e7e7e',
            'marker-size': 'medium',
            'marker-symbol': '',
            Name: 'Captain-Oliver-Triangle',
            Game: 'Create Game'
          },
          geometry: { type: 'Point', coordinates: [ '40.8225721', '-73.90951598' ] }
        }]
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