$(document).ready(function () {
    $('.feedbackWrapper').owlCarousel({

        loop: true,
        dots: true,
        autoplay: false,
        // smartSpeed: 1300
        responsive:{
            0:{
                items:1,

            },
            768:{
                items:2,

            }
        }

    });

    $('.brandsWrapper').owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        autoplay: true,
        margin: 0,
        smartSpeed: 800,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                stagePadding:0,

            },
            450:{
                items:2,
            },
            768:{
                items:3,

            },
            1000:{
                items:4,
            }

        }

    });

    $(document).scroll(function () {
        if ($(document).scrollTop() + $(window).height() > $('.action.blog').offset().top && $(document).scrollTop() - $('.action.blog' ).offset().top < $('.action.blog').height())
        {
            $('.action.blog').addClass('visible')
        }
        if ($(document).scrollTop() + $(window).height() > $('.action.contact').offset().top && $(document).scrollTop() - $('.action.contact').offset().top < $('.action.contact').height())
        {
            $('.action.contact').addClass('visible')
        }
        if ($(document).scrollTop() + $(window).height() > $('.action.plans').offset().top && $(document).scrollTop() - $('.action.plans').offset().top < $('.action.plans').height())
        {
            $('.action.plans').addClass('visible')
        }
        if ($(document).scrollTop() + $(window).height() > $('.action.clients').offset().top && $(document).scrollTop() - $('.action.clients').offset().top < $('.action.clients').height())
        {
            $('.action.clients').addClass('visible')
        }
        if ($(document).scrollTop() + $(window).height() > $('.action.why').offset().top && $(document).scrollTop() - $('.action.why').offset().top < $('.action.why').height())
        {
            $('.action.why').addClass('visible')
        }
        if ($(document).scrollTop() + $(window).height() > $('.action.process').offset().top && $(document).scrollTop() - $('.action.process').offset().top < $('.action.process').height())
        {
            $('.action.process').addClass('visible')
        }
        if ($(document).scrollTop() + $(window).height() > $('.action.team').offset().top && $(document).scrollTop() - $('.action.team').offset().top < $('.action.team').height())
        {
            $('.action.team').addClass('visible')
        }
        if ($(document).scrollTop() + $(window).height() > $('.action.works').offset().top && $(document).scrollTop() - $('.action.works').offset().top < $('.action.works').height())
        {
            $('.action.works').addClass('visible')
        }
        if ($(document).scrollTop() + $(window).height() > $('.action.about').offset().top && $(document).scrollTop() - $('.action.about').offset().top < $('.action.about').height())
        {
            $('.action.about').addClass('visible')
        }
        if ($(document).scrollTop() + $(window).height() > $('.action.services').offset().top && $(document).scrollTop() - $('.action.services').offset().top < $('.action.services').height())
        {
            $('.action.services').addClass('visible')
        }
        if ($(document).scrollTop() + $(window).height() > $('.action.video').offset().top && $(document).scrollTop() - $('.action.video').offset().top < $('.action.video').height())
        {
            $('.action.video').addClass('visible')
        }

    }


)
})


