$(document).ready(function(){


    let sec_top = $('main').offset().top;


    $('.store_menu  > li > a').click(function(){  
   
        event.preventDefault();

        let href = $(this).attr('href'); 
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top - 50
        }, 300)

    })



})