// 36.204824 and longitude 138.252924 -> 36.204824, 138.252924
let map = L.map("map", {
  center: [36.204824, 138.252924],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
