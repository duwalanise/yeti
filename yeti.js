$(document).ready(function(){
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        if(scrollPosition > 50){
            $('nav').addClass('navbar-background');
        } else {
            $('nav').removeClass('navbar-background');
        }
    });

     $("a").on('click', function(e) {
        var target = $(this).attr("href"); 
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); 
    });
});