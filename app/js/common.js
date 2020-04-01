$('[data-fancybox="images"]').fancybox();
$('[data-fancybox="portfolio"]').fancybox();

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 576) {
        $('.employees__content:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            // enterMode: true,
            // variableWidth: true,
            autoplay: true,
        });
    } else {
        $(".employees__content.slick-initialized").slick("unslick");
    }
});
// slick active

$('.footer-box h3').click(function () {
    $(this).toggleClass('click').siblings('.footer-menu').fadeToggle();
});

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

// header scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end