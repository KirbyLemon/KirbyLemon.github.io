let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

d3.josn(url).then(
  function(data)
  {
    console.log(data);
  }
);
