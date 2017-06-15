/* global google */
var test = require('tape')

test('geoCodeTest', function (t) {
  var map
  var service

  var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316)

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  })

  var request = {
    location: pyrmont,
    radius: '500'
  }

  service = new google.maps.places.PlacesService(map)
  service.nearbySearch(request, callback)

  function callback (results, status) {
    t.equals(results.length, 20)
    t.end()
  }
})
