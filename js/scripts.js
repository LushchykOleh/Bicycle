
//mobile menu
$(document).ready(function () {
    $('.menu-button').on('click', function () {
        $('.navigation-wrapper').addClass('active');
    });

    $('.close-menu').on('click', function () {
        $('.navigation-wrapper').removeClass('active');
    })

    //reviews slider
    const reviewsSlider = new Swiper('.swiper-reviews', {

       // direction: 'horisontal',//
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
});

