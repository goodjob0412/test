// 내꺼 ////////////// 메인 페이지만 헤더 다르게 관리하려고
let main_bn_bot = $('.main_bn').outerHeight()
$(window).scroll(function(){

    if (main_bn_bot <= s_top) {
        $('.header').addClass('header_bg')
        $('.logo').addClass('logo_size')
    }
    else {
        $('.header').removeClass('header_bg')
        $('.logo').removeClass('logo_size')
    }
});

////////////////////


// 헤더

// let main_bn_bot = $('.main_bn').outerHeight();
let s_top = ""
let prev_s_top = 0;

let header_active_o_top = $('.header_active').offset().top;

/* 스크롤이 내려가 있는 상태에서 새로고침 했을 때, 스크롤 이벤트가 없는 경우 헤더 버티고 있는 거 막기 */
s_top = $(window).scrollTop()
if(s_top >= header_active_o_top) {
    if(s_top >= prev_s_top) {
        $('.header').addClass('header_hid')
        
        $('.header').addClass('header_bg')
        $('.logo').addClass('logo_size')
    }
    else {
        $('.header').removeClass('header_hid')
    }
    prev_s_top = s_top;

}

/* 메인베너 지나서 헤더 있고 없게 */
$(window).scroll(function(){
    s_top = $(window).scrollTop();
// console.log(s_top , header_active_o_top);
    if(s_top >= header_active_o_top) {

        if(s_top >= prev_s_top) {
            $('.header').addClass('header_hid')

            $('.header').addClass('header_bg')
            $('.logo').addClass('logo_size')
        }
        else {
            $('.header').removeClass('header_hid')
        }
        prev_s_top = s_top;

    }
    else {
        $('.header').removeClass('header_hid')
        $('.header').removeClass('header_bg')
        $('.logo').removeClass('logo_size')
    }

});
