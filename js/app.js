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

$(document).ready(() => {

    var screen_width = $(window).width();

    if(screen_width <= 1200) {

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
    }
});

$(document).ready(() => {

    $(window).resize(() => {

        screen_width = $(window).width();

        if(screen_width <= 1200) {
    
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
        }
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
    console.log(name);
}

const tab_work = (event, id) => {

    let i, tabcontent, tablinks;
    tabcontent = $(".images-work");
    tablinks = $(".work-btn");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_work", "");
    }

    document.getElementById(id).style.display = "grid";
    event.currentTarget.className += " active_work";
}