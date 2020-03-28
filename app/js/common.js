$('[data-fancybox="images"]').fancybox();
$('[data-fancybox="portfolio"]').fancybox();

// $('.retrofitting__content').slick({
//     slidesToShow: 7,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });

$("body").on("click", ".btn-up", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});