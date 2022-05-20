
/* -------------- 헤더 -------------- */

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

    if(s_top >= header_active_o_top) {

        if(s_top >= prev_s_top) {
            $('.header').addClass('header_hid')
        }
        else {
            $('.header').removeClass('header_hid')
            
            $('.header').addClass('header_bg')
            $('.logo').css({transform:'translateX(-48%) scale(0.8)'})
            $('.ham_btn').addClass('ham_btn_size')
            $('.login').addClass('login_size')
        }
        prev_s_top = s_top;

    }
    else {
        $('.header').removeClass('header_hid')
        $('.header').removeClass('header_bg')
        $('.logo').css({transform:'translateX(-48%) scale(1)'})
        $('.ham_btn').removeClass('ham_btn_size')
        $('.login').removeClass('login_size')
    }


});


/* ------------------ ham 버튼 ---------------- */

// 햄버튼 클릭
$('.ham_btn').click (function(){
    $('.ham_nav').css({
        transform: 'translateX(0)'
    });
    $('.ham_close_btn').css({
        backgroundColor: '#fff'
    })
});

// 햄버튼 끄기
$('.ham_close_btn').click(function(){
    $('.ham_nav').css({
        transform: 'translateX(-110%)'
    });

    $('.nav_li').removeClass('nav_li_click')
    // nav_li_chk = true;
});

// nav_li 클릭하면 배경색 바뀌게, sub_menu_box 높이 열고 닫기
let nav_li_chk = ['' , true, '', true, '', true, '',true,true]
$('.nav_li').click (function(){
    let chk_index = $(this).index();
    console.log(chk_index)
    if (nav_li_chk[chk_index]){
        nav_li_chk[chk_index] = false
        $(this).addClass('nav_li_click')


    }
    else {
        nav_li_chk[chk_index] = true
        $(this).removeClass('nav_li_click')
    }
        $(this).next('.sub_menu_box').stop().slideToggle(300)
});

/* -------------- 주소값 추출 -------------- */

// url에서 특정정보
function get_url_info(key) {
    // 1) url에 있는 문자열 가져오기
    let url = location.href; // product.html?xcode=044&cate_no=0&genre=men#id

    // 2) ? 뒤에꺼만(정보) 잘라내기
    url = url.split("?"); // [product.html , xcode=044&cate_no=0&genre=men]

    if(url.length > 1) {

        url = url[1]; // xcode=044&cate_no=0&genre=men

        // 3) &(정보별)로 나누기
        url = url.split("&"); // [xcode=044  ,  cate_no=0#review  ,  genre=men]
        
// console.log(url)
        
        // 4) 각 방마다 'cate_no' 있는지 체크
        for(let i=0; i<url.length; i++) {

            // a 태그 눌러서 #이 별도로 생기면
            if(url[i].indexOf("#") > -1) {    // cate_no=0#review
                url[i] = url[i].split("#")[0]; // [cate_no=0  ,  review]
            }
            
            let tmp_url = url[i].split("=") // i:0 =>[xcode , 044]
                                            // i:1 =>[cate_no , 0]
            if(tmp_url[0] == key) {
                // 5) 있으면 'cate_no'의 실제값 return 해주기
                return tmp_url[1];
            }
        }
        return -1;
    }
    else {
        return -1;
    }
}

