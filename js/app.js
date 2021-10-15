$(".hamburger").on("click", () => {

    $(".hamburger").toggleClass("open");
    $(".menu").toggleClass("open-menu");
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
    speed: 800,
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

var screen_width = 0;

$(window).on("load", () => {

    screen_width = $(window).width();
        
    $('.amazing-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        mobileFirst: true,
        responsive: [
            {
            breakpoint: 1201,
            settings: "unslick"
            },
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

    if(screen_width > 1200) {
        $('.amazing-wrapper').slick("unslick");
    }
});

$(document).ready(() => {

    $(window).resize(() => {

        screen_width = $(window).width();

        if(screen_width > 1200) {
            $('.amazing-wrapper').slick("unslick");
        }
    
        $('.amazing-wrapper').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            mobileFirst: true,
            responsive: [
                {
                breakpoint: 1200,
                settings: "unslick"
                },
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
    });
});

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

$(window).on("load", () => {

    screen_width = $(window).width();

    $('.breaking-grid').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        mobileFirst: true,
        responsive: [
            {
            breakpoint: 1200,
            settings: "unslick"
            },
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

    if(screen_width > 1200) {
        $('.breaking-grid').slick("unslick");
    }
});

$(document).ready(() => {

    $(window).resize(() => {

        screen_width = $(window).width();

        if(screen_width > 1200) {
            $('.breaking-grid').slick("unslick");
        }
    
        $('.breaking-grid').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            mobileFirst: true,
            responsive: [
                {
                breakpoint: 1200,
                settings: "unslick"
                },
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
    });
});

$(document).ready(() => {
    
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
            {
                breakpoint: 540,
                settings: {
                  slidesToShow: 1
                }
            }
        ]
    });
});

$(document).ready(() => {

    $(window).resize(() => {

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
                {
                    breakpoint: 540,
                    settings: {
                      slidesToShow: 1
                    }
                }
            ]
        });
    });
});

function addMarkerToGroup(group, coordinate, html) {
    var marker = new H.map.Marker(coordinate);
    // add custom data to the marker
    marker.setData(html);
    group.addObject(marker);
}
    
  /**
   * Add two markers showing the position of Liverpool and Manchester City football clubs.
   * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
   * @param {H.Map} map A HERE Map instance within the application
   */
  function addInfoBubble(map) {
    var group = new H.map.Group();
  
    map.addObject(group);
  
    // add 'tap' event listener, that opens info bubble, to the group
    group.addEventListener('tap', (evt) => {
      // event target is the marker itself, group is a parent event target
      // for all objects that it contains
      var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
        // read custom data
        content: evt.target.getData()
      });
      // show info bubble
      ui.addBubble(bubble);
    }, false);
  
    addMarkerToGroup(group, { lat: 46.09419982786978, lng: 19.654255565845435 },
    '<div><a target="blank" href="https://erdsoft.com/">Erdsoft</a></div>' +
    '<div>Subotica, Serbia<br />Digital Hive</div>');
}
  
  //Step 1: initialize communication with the platform
  // In your own code, replace variable window.apikey with your own apikey
  var platform = new H.service.Platform({
    apikey: "SpQSyfEx5FqUsBzTgQxW0jjplO17F_EHRhEkmTz7n00"
  });
  var defaultLayers = platform.createDefaultLayers();
  
  //Step 2: initialize a map - this map is centered over Europe
  var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map,{
    center: { lat:46.09419982786978, lng:19.654255565845435 },
    zoom: 6,
    pixelRatio: window.devicePixelRatio || 1
  });
  window.addEventListener('resize', () => map.getViewPort().resize());
  
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
  // create default UI with layers provided by the platform
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  
  // Now use the map as required...
  addInfoBubble(map);


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