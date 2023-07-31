let latitude = 22.7868542, longitude = 88.3643296;

mapboxgl.accessToken = 'pk.eyJ1Ijoib3BoaWxpYSIsImEiOiJjbGtxOTExbncyYWZrM2trZWRlajNieWdlIn0.W_OFsyZySEtugQ_loeDWHw'
//GeoJSON

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#amber")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([75.85133, 26.98547])
	.addTo(map);

var img2 = document.querySelector("#gateway")
// Create a  Gateway of India, Mumbai Marker and add it to the map.
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([72.835163, 18.920180])
	.addTo(map);

var img3 = document.querySelector("#gate")
// Create a India Gate Marker and add it to the map.
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([77.22931, 28.61495])
	.addTo(map);


var img4 = document.querySelector("#lotus")

// Create a Lotus Temple, Delhi Marker and add it to the map.
var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([77.25880, 28.553501])
	.addTo(map);


//Create a Victoria Memorial, Kolkata Marker and add it to the map.
var img5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([88.342785, 22.546170])
	.addTo(map);