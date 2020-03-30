$('[data-fancybox="images"]').fancybox();
$('[data-fancybox="portfolio"]').fancybox();

// $('.retrofitting__content').slick({
//     slidesToShow: 7,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 992) {
        $('.footer-box h3').click(function () {
           $(this).toggleClass('click').siblings('.footer-menu').fadeToggle();
        });
    }
    if ($(window).width() < 576) {
        $('.employees__content:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            enterMode: true,
            variableWidth: true
        });
    } else {
        $(".employees__content.slick-initialized").slick("unslick");
    }
});
// slick active

$("body").on("click", ".btn-up", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

$('.btn-burger').click(function () {
   $('.header-bottom').fadeToggle();

});

$('.btn-close').click(function () {
   $('.header-bottom').fadeOut();
});