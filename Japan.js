// 36.204824 and longitude 138.252924 -> 36.204824, 138.252924
let map = L.map("map", {
  center: [26.33583, 127.80139],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Okinawa Japan: Coordinates: 26.33583°N latitude and 127.80139°E longitude -> 26.33583, 127.80139
L.circle([26.33583, 127.80139], {
  fillColor: '#FFECA1',
  color: '#BFD641',
  radius: 1000
}).bindPopup(`<iframe width="280" height="120" src="https://www.youtube.com/embed/yeoIsv2xDMA?si=RPhD9nsFoOPK9t3J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
        .addTo(map);
