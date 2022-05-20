$(document).ready(function(){


    let sec_top = $('main').offset().top;



    $(window).scroll(function(){

		//헤더
        let s_top = $(window).scrollTop();
    
        console.log(sec_top, s_top)
    
        if(0 < s_top) {
            $('header').addClass('header_active')
        }
        else if(0 >= s_top) {
            $('header').removeClass('header_active')
        }







    })


    $('.store_menu  > li > a').click(function(){  
   
        event.preventDefault();

        let href = $(this).attr('href'); 
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top - 50
        }, 300)

    })



})