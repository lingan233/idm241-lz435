$(document).ready(function () {
    var menuStatus = false;
    $('.slideout').hide();

    function open() {
        $('.first, .second, .third, .hid').addClass('animate');
        $('.menu-btn').addClass('menu-btn-spin');
        //$('.second').css({
        //  'transform': 'rotateZ(225deg)',
        // 'transition': 'all .5s ease-out',
        // 'background': '#c00'
        //});
        //$('.first, .third').css({
        //  'visibility': 'hidden',
        //  'transition': 'all .3s ease-out'
        //});
        //$('.hid').css({
        // 'display': 'block',
        // 'transform': 'rotateZ(315deg)'
        //});
        menuStatus = true;
    }

    function close() {
        $('.first, .second, .third, .hid').removeClass('animate');
        $('.menu-btn').removeClass('menu-btn-spin');
        //$('.second').css({
        //  'transform': 'rotateZ(0deg)',
        // 'transition': 'all .5s ease-out',
        //  'background': '#fff'
        //});
        //$('.first, .third').css({
        //  'visibility': 'visible',
        //  'transition': 'all .3s ease-out'
        //});
        // $('.hid').css({
        //   'display': 'none',
        //   'transform': 'rotateZ(225deg)'
        // });
        menuStatus = false;
    }
    $('.menu-btn').click(function () {
        $('.slideout').toggle('slide');
        if (menuStatus === false) {
            $('.menu-txt').html('Close');
            open();
        } else {
            $('.menu-txt').html('Menu');
            close();
        }
    });

    // click on menu items
    $(".slideout li").on("click", function () {
        // remove the active class from all elements with active class
        $('.active').removeClass('active')
        // add active class to clicked element
        $(this).addClass('active');
        $('.content-txt').html($('.active').text() + ' PAGE');
    });
});