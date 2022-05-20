$(document).ready(function(){

    let sec_top = $('main').offset().top;
    let box_1 = $('.contain_1').offset().top;
    let box_2 = $('.contain_2').offset().top;
    let box_3 = $('.contain_3').offset().top;
    let box_4 = $('.contain_4').offset().top;
    let box_5 = $('.contain_5').offset().top;
    let box_6 = $('.contain_6').offset().top;
    let box_7 = $('.contain_7').offset().top;
    let box_8 = $('.contain_8').offset().top;


    $(window).scroll(function(){

        let s_top = $(window).scrollTop();
        console.log(sec_top, s_top)

        if(0 < s_top) {
            $('header').addClass('header_active')
        }
        else if(0 >= s_top) {
            $('header').removeClass('header_active')
        }






        // if(s_top + 600 >= box_1) {
        //     $('.contain_1').addClass('opacity')
        // }
        // if(s_top + 600 >= box_2) {
        //     $('.contain_2').addClass('opacity')
        // }
        if(s_top + 600 >= box_3) {
            $('.contain_3').addClass('opacity')
        }
        if(s_top + 600 >= box_4) {
            $('.contain_4').addClass('opacity')
        }
        if(s_top + 600 >= box_5) {
            $('.contain_5').addClass('opacity')
        }
        if(s_top + 600 >= box_6) {
            $('.contain_6').addClass('opacity')
        }
        if(s_top + 600 >= box_7) {
            $('.contain_7').addClass('opacity')
        }
        if(s_top + 600 >= box_8) {
            $('.contain_8').addClass('opacity')
        }
 




    })










})