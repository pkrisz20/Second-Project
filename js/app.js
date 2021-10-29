var hamburgerOpen = false;
$(".hamburger").on("click", () => {

    if(hamburgerOpen === false) {
        $(".hamburger").addClass("open");
        $(".menu").addClass("open-menu");
        hamburgerOpen = true;
        document.body.style.overflow = 'hidden';
        $(".overlay_black").css("display", "block");

    } else {
        $(".hamburger").removeClass("open");
        $(".menu").removeClass("open-menu");
        hamburgerOpen = false;
        document.body.style.overflow = 'scroll';
        $(".overlay_black").css("display", "none");
    }
});

$(".overlay_black").on("click", () => {
    if(hamburgerOpen === true) {
        $(".hamburger").removeClass("open");
        $(".menu").removeClass("open-menu");
        hamburgerOpen = false;
        document.body.style.overflow = 'scroll';
        $(".overlay_black").css("display", "none");
    }
});

$(window).bind('scroll', () => {
    if ($(window).scrollTop() > 0) {

      $('header').addClass('sticky');
    }
    else {

      $('header').removeClass('sticky');
    }
});

$('.carousel-hero').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
            }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
            }
        }
    ]
});

var amazingCarouselInitialized = false;
var breakingCarouselInitialized = false;
var TeamCarouselInitialized = false;

$(window).resize(() => {
    checkScreen();
    checkScreenBreaking();
    checkScreenTeam();
});

$(window).ready(() => {
    checkScreen();
    checkScreenBreaking();
    checkScreenTeam();
});

function checkScreen() {
    var screen_width = $(window).width();

    if (screen_width > 1200) {
        if(amazingCarouselInitialized === true) {
            $('.amazing_carousel').slick("unslick");
            amazingCarouselInitialized = false;
        }
    } else {
        initAmazing();
    }
}

function checkScreenBreaking() {
    var screen_width = $(window).width();

    if (screen_width > 1200) {
        if(breakingCarouselInitialized === true) {
            $('.breaking-grid').slick("unslick");
            breakingCarouselInitialized = false;
        }
    } else {
        initBreaking();
    }
}

function checkScreenTeam() {
    var screen_width = $(window).width();

    if (screen_width > 540) {
        if(TeamCarouselInitialized === true) {
            $('.cards').slick("unslick");
            TeamCarouselInitialized = false;
        }
    } else {
        initTeam();
    }
}

function initAmazing() {

    if(amazingCarouselInitialized == false) {

        $('.amazing_carousel').slick({
            dots: true,
            infinite: true,
            speed: 300,
            arrows: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
        amazingCarouselInitialized = true;
    } else {
        return;
    }
}

function initBreaking() {

    if(breakingCarouselInitialized == false) {

        $('.breaking-grid').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true
                    }
                },
                {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                    }
                },
                {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                    }
                }
            ]
        });
        breakingCarouselInitialized = true;
    } else {
        return;
    }
}

function initTeam() {

    if(TeamCarouselInitialized == false) {

        $('.cards').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
        TeamCarouselInitialized = true;
    } else {
        return;
    }
}

const tab_open = (evt, name) => {

    let i, tabcontent, tablinks;
    tabcontent = $(".t-content");
    tablinks = $(".tab");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

const tab_work = (event, id) => {

    let i, tabcontent, tablinks;
    tabcontent = $(".images-work");
    tablinks = $(".work-btn");
    $('.load-btn').show();
    $('.more').hide();
    $('.more_graph').hide();
    $('.more_web').hide();
    $('.more_land').hide();
    $('.more_press').hide();

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_work", "");
    }

    document.getElementById(id).style.display = "grid";
    event.currentTarget.className += " active_work";
}

var more = $('.more');
more.slice(0, more.length).hide();
$(".load-btn").on("click", () => {

    $(".more:hidden").slice(0, 4).slideDown();
    if($(".more:hidden").length == 0) { $(".load-btn").hide(); }
});

var more_graph = $('.more_graph');
more_graph.slice(0, more_graph.length).hide();
$(".load-btn").on("click", () => {

    $(".more_graph:hidden").slice(0, 4).slideDown();
    if($(".more_graph:hidden").length == 0) { $(".load-btn").hide(); }
});

var more_web = $('.more_web');
more_web.slice(0, more_web.length).hide();
$(".load-btn").on("click", () => {

    $(".more_web:hidden").slice(0, 4).slideDown();
    if($(".more_web:hidden").length == 0) { $(".load-btn").hide(); }
});

var more_land = $('.more_land');
more_land.slice(0, more_land.length).hide();
$(".load-btn").on("click", () => {

    $(".more_land:hidden").slice(0, 4).slideDown();
    if($(".more_land:hidden").length == 0) { $(".load-btn").hide(); }
});

var more_press = $('.more_press');
more_press.slice(0, more_press.length).hide();
$(".load-btn").on("click", () => {

    $(".more_press:hidden").slice(0, 4).slideDown();
    if($(".more_press:hidden").length == 0) { $(".load-btn").hide(); }
});

const tab_services = (evt, name) => {

    let i, tabcontent, tablinks;
    tabcontent = $(".services-content");
    tablinks = $(".service-btn");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_service", "");
    }

    document.getElementById(name).style.display = "flex";
    evt.currentTarget.className += " active_service";
}

$('.counter').countUp({
    time: 2000,
    delay: 10
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    centerPadding: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        },
    ]
});

function addSVGMarkers(map) {
    var svgMarkup = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M-995.72 1225.8c-.273-.78-1.645-6.027-3.049-11.662-4.441-17.823-12.122-36.988-22.546-56.255-5.984-11.061-7.067-12.824-24.551-40-28.252-43.911-33.217-56.241-32.173-79.89.957-21.672 8.272-37.909 24.149-53.61 13.179-13.032 27.807-20.549 45.601-23.432 44.097-7.145 86.878 21.883 95.546 64.828 2.02 10.012 1.572 27.243-.953 36.604-2.77 10.269-13.883 31.045-29.589 55.315-28.348 43.807-39.082 65.687-47.119 96.05-3.111 11.755-4.398 14.673-5.316 12.052z" style="stroke:#5a0000;stroke-width:5.7;fill:#f41922" transform="matrix(.18403 0 0 .17534 214.35 -157.87)"/><path style="stroke-width:0;fill:#0e232e" d="M-962.86 1042.4c0 16.568-14.071 30-31.429 30-17.357 0-31.429-13.432-31.429-30 0-16.569 14.071-30 31.429-30s31.429 13.431 31.429 30z" transform="matrix(.2016 0 0 .19208 231.816 -173.312)"/></svg>`;
    
    var bearsIcon = new H.map.Icon(
        svgMarkup.replace('${FILL}', 'red')),
        bearsMarker = new H.map.Marker({ lat:46.09419982786978, lng:19.654255565845435 }, { icon: bearsIcon });
        
    map.addObject(bearsMarker);
}

var platform = new H.service.Platform({
    apikey: "SpQSyfEx5FqUsBzTgQxW0jjplO17F_EHRhEkmTz7n00"
});
var defaultLayers = platform.createDefaultLayers();
  
var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map,{
        center: { lat:46.09419982786978, lng:19.654255565845435 },
        zoom: 6,
        pixelRatio: window.devicePixelRatio || 1
    }
);

window.addEventListener('resize', () => map.getViewPort().resize());
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// create default UI with layers provided by the platform
var ui = H.ui.UI.createDefault(map, defaultLayers);
addSVGMarkers(map);


jQuery.validator.addMethod("customEmail", function(value, element) {
    return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
}, "Please enter valid email address!");

var $contactForm = $('#contact_id');
if($contactForm.length){
    $contactForm.validate({

        rules:{
            name: {
                required: true
            },
            email: {
                required: true,
                customEmail: true
            },
            message: {
                required: true
            }
        },
        messages:{

            name: {
                required: 'Please enter your name!'
            },
            email: {
                required: 'Please enter your email!',
                email: 'Please enter valid email!'
            },
            message: {
                required: 'Please write your message!'
            }
        }
    });
}