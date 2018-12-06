$(function() {
    dropmenu.init();
});

var dropmenu = (function() {
    var $listItems = $('#drop-buttons > ul > li'),
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



////map
var map1, map2;

function drawMap() {

    var mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        fullscreenControl: false
    }

    mapOptions.center = new google.maps.LatLng(51.509865, -0.118092);
    map1 = new google.maps.Map(document.getElementById("mapCanvas1"), mapOptions);

    mapOptions.center = new google.maps.LatLng(52.370216, 4.895168);
    map2 = new google.maps.Map(document.getElementById("mapCanvas2"), mapOptions);

}