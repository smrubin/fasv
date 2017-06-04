(function($) {
    'use strict';

    /* Hide menu after click
    ----------------------------------------------*/
    $('.navbar-nav li a:not(.dropdown-toggle)').click(function(event) {
        $('.in').collapse('hide');
    });

    /* Smooth scroll to section
    ----------------------------------------------*/
    $('a.scroll[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-70
                }, 2000);
                return false;
            }
        }
    });

    /* Testimonials slideshow
    ----------------------------------------------*/
    $("#testimonial-carousel").owlCarousel({
        autoPlay: 6000, //Set AutoPlay to 6 seconds
        singleItem: true,
        pagination : false 
    });

    /* Tooltip
    ----------------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();

    /* Google map
    ----------------------------------------------*/
    $(".map").each(function(){
            
        var data_zoom = 17;
        
        if ($(this).attr("data-zoom") !== undefined) {
            data_zoom = parseInt($(this).attr("data-zoom"),10);
        }   
        
        $(this).gmap3({
            marker: {
                values: [{
                    address: "7016 Lee Park Road, Suite #105, Mechanicsville, VA 23111",
                    data: "<p>Mechanicsville</p><p>804-746-5488</p><p>7016 Lee Park Road, Suite #105, Mechanicsville, VA 23111</p>"
                },
                {
                    address: "9766 Midlothian Turnpike, Richmond, VA 23235",
                    data: "<p>Midlothian Location</p><p>804-330-2467</p><p>9766 Midlothian Turnpike, Richmond, VA 23235</p>"
                },
                {
                    address: "1500 N. 28th Street, Suite #210, Richmond, VA 23223",
                    data: "<p>East End Location</p><p>804-330-2467</p><p>1500 N. 28th Street, Suite #210, Richmond, VA 23223</p>"
                }],
                options:{
                    draggable: false
                },
                events:{
                    click: function(marker, event, context){
                        var map = $(this).gmap3("get"),
                        infowindow = $(this).gmap3({get:{name:"infowindow"}});
                        if (infowindow){
                            infowindow.open(map, marker);
                            infowindow.setContent(context.data);
                        } else {
                            $(this).gmap3({
                                infowindow:{
                                    anchor:marker, 
                                    options:{content: context.data}
                                }
                            });
                        }
                    }
                }
            },
            map: {
                options: {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: data_zoom,
                    scrollwheel: false
                }
            }
        });
        
    });
          
})(jQuery);

