$(document).ready(function () {
    $(".single-item").slick({
    });

    $(".multiple-items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});