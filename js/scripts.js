
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

//ancorLincks
$('a').on('click', function (event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function() {
            window.location.hash = hash;
        })
    }
})

});

