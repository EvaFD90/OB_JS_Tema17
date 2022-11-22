let markers, map;

function initMap() {
    const posicion = {
        lat: -25.344,
        lng: 131.031,
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    markers.push(
        new google.maps.Marker({
        position: {
            lat: 37.196028560210785,
            lng: -3.58807408499594,
        },
        map,
        title: "Granada",
        })
    );
    markers.push(
        new google.maps.Marker({
        position: {
            lat: 19.509468379896994,
            lng: -87.71734664340671,
        },
        map,
        title: "Sian Ka'an",
        })
    );
    markers.push(
        new google.maps.Marker({
        position: {
            lat: 43.57020316952868, 
            lng: -8.320989265058902,
        },
        map,
        title: "Prior",
        })
    );
}