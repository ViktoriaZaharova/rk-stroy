$('[data-fancybox="images"]').fancybox();
$('[data-fancybox="portfolio"]').fancybox();
$('[data-fancybox="image"]').fancybox();
$('[data-fancybox="reviews"]').fancybox();

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
   $('.header-bottom__mobile').fadeToggle();

});

$('.btn-close').click(function () {
   $('.header-bottom__mobile').fadeOut();
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
    $(".header-bottom__desktop .go_to").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top - 160}, 500);
    });
});


$(document).ready(function () {
    $(".header-bottom__mobile .go_to").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top - 90}, 500);
        $('.header-bottom__mobile').fadeOut();
    });
});
//плавный скролл end

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$('.sidebar-menu__title').click(function () {
   $(this).siblings('.accordion-content').slideToggle();
});

$('.recommended-products__slider').slick({
    slidesToShow: 6,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1460,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});