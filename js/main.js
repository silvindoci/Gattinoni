$(function() {
    dropmenu.init();
});

var dropmenu = (function() {
    var $listItems = $('.drop-buttons > ul > li'),
        $menuItems = $listItems.children('.drop-link'),
        $body = $('body'),
        current = -1;

    function init() {
        $menuItems.on('click', open);
        $listItems.on('click', function(event) { event.stopPropagation(); });
    }

    function open(event) {
        if (current !== -1) {
            $listItems.eq(current).removeClass('d_active');
        }
        var $item = $(event.currentTarget).parent('li'),
            idx = $item.index();
        if (current === idx) {
            $item.removeClass('d_active');
            current = -1;
        } else {
            $item.addClass('d_active');
            current = idx;
            $body.off('click').on('click', close);
        }
        return false;

    }

    function close(event) {
        $listItems.eq(current).removeClass('d_active');
        current = -1;
    }
    return { init: init };
})();





//toggle menu
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}





//slider
var slider = document.getElementById("myRange");
var output = document.getElementById("silverslider");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}





///3 hatat
function initialize() {
    //hara e pare me search box
    var markers = [];
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-33.8902, 151.1759),
        new google.maps.LatLng(-33.8474, 151.2631));
    map.fitBounds(defaultBounds);

    // butoni i kerkimit.
    var input = /** @type {HTMLInputElement} */ (
        document.getElementById('#mySearch'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var searchBox = new google.maps.places.SearchBox(
        /** @type {HTMLInputElement} */
        (input));
    google.maps.event.addListener(searchBox, 'places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }
        for (var i = 0, marker; marker = markers[i]; i++) {
            marker.setMap(null);
        }
        markers = [];
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, place; place = places[i]; i++) {
            var image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };
            var marker = new google.maps.Marker({
                map: map,
                icon: image,
                title: place.name,
                position: place.geometry.location
            });
            markers.push(marker);
            bounds.extend(place.geometry.location);
        }
        map.fitBounds(bounds);
    });
    google.maps.event.addListener(map, 'bounds_changed', function() {
        var bounds = map.getBounds();
        searchBox.setBounds(bounds);
    });




    //3 hotelet

    var myLatlngOH = new google.maps.LatLng(39.630159, -84.175937);
    var myLatlngCA = new google.maps.LatLng(33.677705, -117.852974);
    var myLatlngUK = new google.maps.LatLng(51.520614, -0.121825);

    var mapOptionsOH = {
        zoom: 12,
        center: myLatlngOH,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: 0
    }
    var mapOptionsCA = {
        zoom: 12,
        center: myLatlngCA,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: 0
    }
    var mapOptionsUK = {
        zoom: 12,
        center: myLatlngUK,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: 0
    }

    var mapOH = new google.maps.Map(document.getElementById('map-OH'), mapOptionsOH);
    var mapCA = new google.maps.Map(document.getElementById('map-CA'), mapOptionsCA);
    var mapUK = new google.maps.Map(document.getElementById('map-UK'), mapOptionsUK);

    var markerOH = new google.maps.Marker({
        position: myLatlngOH,
        map: mapOH,
        title: 'hoteli1'
    });
    var markerCA = new google.maps.Marker({
        position: myLatlngCA,
        map: mapCA,
        title: 'hoteli2'
    });
    var markerUK = new google.maps.Marker({
        position: myLatlngUK,
        map: mapUK,
        title: 'hoteli3'
    });
}

google.maps.event.addDomListener(window, 'load', initialize);