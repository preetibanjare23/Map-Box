mapboxgl.accessToken = "pk.eyJ1IjoiZ2F1cmF2bmciLCJhIjoiY20xdGx3ODhuMDNzNTJ0cHI2YWphY2p1ZCJ9.DCncOYgA91GXOkejz0CilQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

let map;
let userCoordinates;

function successLocation(position) {
  userCoordinates = [position.coords.longitude, position.coords.latitude];
  setupMap(userCoordinates);
}

function errorLocation() {
  userCoordinates = [-2.24, 53.48]; 
  setupMap(userCoordinates);
}

function setupMap(center) {
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving', 
  });

  map.addControl(directions, "top-left");

  document.getElementById('searchButton').onclick = function () {
    const query = document.getElementById('searchInput').value;
    geocodeLocation(query, map);
  };

  document.getElementById('nearbyButton').onclick = function () {
    findNearbyPlaces(userCoordinates);
  };
}

function geocodeLocation(query, map) {
  const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxgl.accessToken}`;

  fetch(geocodingUrl)
    .then(response => response.json())
    .then(data => {
      const features = data.features;
      if (features.length > 0) {
        const [lng, lat] = features[0].center; 
        map.flyTo({ center: [lng, lat], zoom: 15 }); 

        new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
      } else {
        alert("Location not found");
      }
    })
    .catch(err => {
      console.error('Error fetching location:', err);
      alert("Error fetching location");
    });
}

function findNearbyPlaces(coordinates) {
  const placesUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places-nearby/${coordinates[0]},${coordinates[1]}.json?access_token=${mapboxgl.accessToken}&limit=5`;

  fetch(placesUrl)
    .then(response => response.json())
    .then(data => {
      const features = data.features;
      if (features.length > 0) {
        features.forEach(feature => {
          const [lng, lat] = feature.geometry.coordinates;
          new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .setPopup(new mapboxgl.Popup().setText(feature.place_name))
            .addTo(map);
        });
        map.flyTo({ center: coordinates, zoom: 15 }); 
      } else {
        alert("No nearby places found");
      }
    })
    .catch(err => {
      console.error('Error fetching nearby places:', err);
      alert("Error fetching nearby places");
    });
}