$('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024, // For tablets and small laptops
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600, // For mobile devices
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
