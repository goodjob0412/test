
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

            $('.header').addClass('header_bg')
            $('.logo').addClass('logo_size')
        }
        else {
            $('.header').removeClass('header_hid')
        }
        prev_s_top = s_top;

    }
    else {
        $('.header').removeClass('header_bg')
        $('.logo').removeClass('logo_size')
    }

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

