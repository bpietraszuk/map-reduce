```<head>
  <script type='text/javascript' src='https://www.google.com/jsapi'></script>
  <script type='text/javascript'>
   google.load('visualization', '1', {'packages': ['geomap']});
   google.setOnLoadCallback(drawMap);

    function drawMap() {
      var data = google.visualization.arrayToDataTable([
        ['City', 'Ilosc zauwazen UFO'],
        ['Seattle', 440],
        ['Phoenix', 377],
        ['Los Angeles', 294],
        ['San Diego', 274],
        ['Las Vegas', 271],
        ['Portland', 253],
		['Chicago', 219],
		['Tucson', 187],
		['Miami', 161],
		['Austin', 159]
      ]);

      var options = {};
      options['region'] = 'US';
      options['colors'] = [0xFF8747, 0xFFB581, 0xc06000]; //orange colors
      options['dataMode'] = 'markers';

      var container = document.getElementById('map_canvas');
      var geomap = new google.visualization.GeoMap(container);
      geomap.draw(data, options);
    };

  </script>
</head>

<body>
    <div id='map_canvas'></div>
</body>```