// 36.204824 and longitude 138.252924 -> 36.204824, 138.252924
let map = L.map("map", {
  center: [36.204824, 138.252924],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Okinawa Japan Coordinates: 26.33583°N latitude and 127.80139°E longitude -> 26.33583, 127.80139
L.circle([26.33583, 127.80139], {
  fillColor: 'pastel yellow',
  color: 'true blue',
  radius: 1000
}).addTo(map);
