const csv = require('csv-parser')
const fs = require('fs')
const results = [];
 
fs.createReadStream('assets/parks.csv')
  .pipe(csv())
  .on('data', (x) => {
  
  console.log({
    "type": "Feature",
    "properties": {
      "marker-color": "#7e7e7e",
      "marker-size": "medium",
      "marker-symbol": "",
      "Name": x.name,
      "Game": "Create Game"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        x.longitude, x.latitude
      ]
    }
    
  })
  console.log(',');
    
})
  .on('end', () => {
    console.log("done");
  });