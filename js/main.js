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


var slider = document.getElementById("myRange");
var output = document.getElementById("silverslider");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}




function initMap() {
    var uluru = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 10, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
}