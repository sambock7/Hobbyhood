let parks = [{"id": 1,
"name": "American-Playground"
},
{
"id": 2,
"name": "Amersfort-Park"
},
{
"id": 3,
"name": "Bartel-Pritchard-Square"
},
{
"id": 4,
"name": "Beattie-Square"
},
{
"id": 5,
"name": "Bensonhurst-Park"}]
let API = {
  getPark: function(name) {
  return $.ajax({
    url: "api/parks/name/" + name,
    type: "GET"
  });
}}
$(document).ready(function() {
let input = $("#park-name")
$(document).keyup(function() {
  console.log(input[0].value)
})
let parkName = input[0].value

$("#park-button").click(function() {
    API.getPark(parkName).then(data => console.log(data))
});


})