let currentLocation = window.location.pathname;
setTimeout(() => {
    if (currentLocation === '/index.html' || currentLocation === '/') {
        window.location.href = 'main.html'
    }
}, 3000);


console.log(currentLocation);

// slick

$('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
});