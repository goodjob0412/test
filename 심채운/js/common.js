
let nav_o_t = $('.nav').offset().top;

$(window).scroll(function(){
    let s_top = $(window).scrollTop();
    // console.log(nav_o_t, s_top)
    
    if(s_top >= nav_o_t){
        $('.nav').addClass('nav_active')
    }
    else {
        $('.nav').removeClass('nav_active')
    }
})