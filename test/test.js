/* global google */
var test = require('tape')

test('get places within 500 meters radius', function (t) {
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
    t.true(results.length > 0)
    t.end()
  }
})

test('get a bar within 5000 meters', function (t) {
  var map
  var service

  var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316)

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  })

  var request = {
    location: pyrmont,
    radius: '5000',
    type: 'bar'
  }

  service = new google.maps.places.PlacesService(map)
  service.nearbySearch(request, callback)

  function callback (results, status) {
    t.true(results.length > 0)
    var firstResult = results[0]
    var isBar = firstResult.types.indexOf('bar') > -1
    t.true(isBar)
    t.end()
  }
})
