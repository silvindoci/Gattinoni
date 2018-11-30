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