/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var currentMarker = null

function addMarker(location, map) {

  if (currentMarker != null) {
    currentMarker.setMap(null);
  }

  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  currentMarker = new google.maps.Marker({
    position: location,
    map: map,
  });

  document.getElementById("validate").hidden = false;
}


function initialize() {

  const points = [  {lat: 44.6364301, lng: 1.3770812},
                    {lat: 43.316416, lng: -0.3797836},
                    {lat: 48.8689155, lng: 2.3524931},
                    {lat: 48.6451142, lng: -2.0184227},
                    {lat: 47.9446014, lng: 0.2335304},
                    {lat: 49.2398422, lng: 4.0224285},
                    {lat: 49.2489852, lng: 3.9056319},
                    {lat: 45.8818883, lng: 6.1745673},
                    {lat: 46.7308276, lng: 6.3565855},
                    {lat: 49.7623064, lng: 5.0633475},
                    {lat: 49.0049055, lng: 2.5769586},
                    {lat: 44.6566433, lng: -1.2390916},
                    {lat: 49.2541972, lng: 3.9314264},
                    {lat: 49.2947421, lng: 4.1192805},
                    {lat: 45.9230314, lng: 6.8704662},
                    {lat: 45.7586568, lng: 4.8358745},
                    {lat: 44.6939981, lng: 3.0351179},
                    {lat: 50.6394372, lng: 3.0583644},
                    {lat: 47.1980479, lng: 4.0635723},];


  const randomPoint = points[getRandomInt(points.length)];
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 46.4239767, lng: 2.2399612}, // Center of France
    zoom: 4,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, "click", (event) => {
    addMarker(event.latLng, map);
  });
  
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: randomPoint,
      pov: {
        heading: 34,
        pitch: 10,
      },
      fullscreenControl: false,
      addressControl: false,
      showRoadLabels: false
    }
  );

}

window.initialize = initialize;
