$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $('.site-navigation').addClass("active")
    } else {
        $('.site-navigation').removeClass("active")
    };
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$(".background-change-icon").on("click", () => {
    if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $('.background-change-icon.light-btn').hide();
        $('.background-change-icon.dark-btn').show();
    } else {
        $("body").addClass("light");
        $('.background-change-icon.dark-btn').hide();
        $('.background-change-icon.light-btn').show();
    };
 });