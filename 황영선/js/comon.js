console.log(  document.body.clientWidth  );
$(document).ready(function(){
    // kor 언어
    let chk = true;
    $('.kor').click(function(){
        if(chk == true) {
            $('.other_lang').css({
                display: 'inline-block'
            })
            chk = false;
        }
        else if (chk == false) {
            $('.other_lang').css({
                display: 'none'
            })
            chk = true;
        }
    })

    // hamberger
    let ham_pan = $('.ham_pan')
    let ham_chk = true;
    function hamberg() {
        if(ham_chk == true) {
            ham_pan.addClass('left')
            // ham_pan.removeClass('left')
            ham_chk = false;
        }
        else if (ham_chk == false) {
            ham_pan.removeClass('left')
            ham_chk = true;
        }
    }
    $('.hamberger').click(function(){
        hamberg();
    })
    let b_ham_chk = true;
    $('.big_menu').click(function(){
        if(b_ham_chk == true) {
            $('.h_m_smenu').stop().slideDown(300)
            // $('.h_m_smenu').css({
            //     height: '280px',
            // })
            b_ham_chk = false;
        }
        else if (b_ham_chk == false) {
            $('.h_m_smenu').stop().slideUp(300)
            // $('.h_m_smenu').css({
            //     height: '0',
            // })
            b_ham_chk = true;
        }
    })
    // $('.small_m').mouseenter.css({
    //     background: 'rgb(255, 60, 60)'
    // })

    // search_bar
    let search_chk = true;
    $('.search_bar').click(function(event) {

        event.stopPropagation(); 
        if(search_chk == true) {
            $('.around_pan').css ({
                display: 'inline-block'
            })

            $('.pan_list_ul').empty();
            for(let i=0; i< 10; i++) {
                let popular = `
                            <li class="around_li">
                            <a href="test.html?cate_no=${i}" class="around_a">
                                <div>
                                    <i class="around_item_no">${A_LIST[0][i].item_no}</i>
                                    <span class="around_title">${A_LIST[0][i].title}</span>
                                </div>
                                <span class="around_good">${A_LIST[0][i].good}</span>
                            </a>
                        </li>`;
                $('.pan_list_ul').append(popular)
            }
            $('.pan_list_increase').empty();
            for(let i=0; i< 4; i++) {
                let increase = `
                            <li class="around_li">
                            <a href="test.html?cate_no=${i}" class="around_a">
                                <div>
                                    <i class="around_item_no">${A_LIST[1][i].item_no}</i>
                                    <span class="around_title">${A_LIST[1][i].title}</span>
                                </div>
                                <span class="around_good">${A_LIST[1][i].good}</span>
                            </a>
                        </li>`;
                $('.pan_list_increase').append(increase)
            }
            search_chk = false;
        }
        else if (search_chk == false) {
                $('.around_pan').css({
                    display: 'none'
                })
            search_chk = true;
        }
    })

    $('body').click(function(){
        $('.around_pan').css({
            display: 'none'
        })

        search_chk = true;
    })

    // integration_btn
    let chk_bar = true;
    $('.plus_btn').click(function(){
    if(chk_bar == true) {
        $('.plus_btn').css({
                transform: 'rotateZ(45deg)',
                opacity: '0',
                transition: 'all 0.3s',
        })
            $('.x_btn').css({
                transform: 'rotateZ(45deg)',
                opacity: '5',
                transition: 'all 0.3s',
            })

            $('.down_btn').css({
                top: '-110%',
                opacity: '1',
            })
            $('.top_btn').css({
                top: '-220%',
                opacity: '1',
            })
            $('.kakao_btn').css({
                top: '-330%',
                opacity: '1',
            })
            $('.line_btn').css({
                top: '-440%',
                opacity: '1',
            })

            chk_bar = false;
    }
    else if (chk_bar == false) {
            $('.plus_btn').css({
                opacity: '1',
                transform: 'rotateZ(0deg)',
                transition: 'all 0.3s',
        })
            $('.x_btn').css({
                transform: 'rotateZ(0deg)',
                opacity: '0',
                transition: 'all 0.3s',
            })

            $('.integ').css({
                top: '0',
                opacity: '0',
            })

            chk_bar = true;
    }
    })

    // 다운버튼 누르면 스크롤로 아래로 내려가기
    let down_o_top = $('.footer').offset().top;
    let down_o_bot = down_o_top + $('.footer').outerHeight();
    $('.down_btn').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('.footer').offset().top 
        }, 300)
    })

    let top_o_top = $('.header').offset().top;
    $('.top_btn').click(function(event){
        event.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 300)
    })

    // 메뉴 100%
    $('.nav_li').mouseenter(function(){
        let li_num = $(this).index()


        if(li_num > 3) {
            $('.nav_pan').addClass('n_pan_active')
        }
        nav_pan_text(li_num)
    })
    $('.nav_li, .nav_pan').mouseleave(function(){
            $('.nav_pan').removeClass('n_pan_active')
    })
    $('.nav_pan').mouseenter(function(){
            $('.nav_pan').addClass('n_pan_active')
    })
})

// nav_pan_text()
function nav_pan_text(ttt) {
    $('.n_center_pan').empty();


    for(let i=0; i< B_LIST[ttt].length; i++) {
        let pan_text = `
                        <div class="n_sub_pan">
                            <div class="n_pan_text">
                                <a href="list.html?cate_no=${ttt}&item_no=${i+1}" class="p_txt">${B_LIST[ttt][i].title}</a> 
                            </div>
                        </div>`;
        $('.n_center_pan').append(pan_text)
    }
}
let pan_pic = `
                <div class="nc_pic">
                    <a href="product.html?cate_no=1&item_no=20"><img src="./사진/best_plus/2.gif" alt=""></a>
                    <a href="product.html?cate_no=1&item_no=12"><img src="./사진/best_plus/14.gif" alt=""></a>
                </div>`;
$('.n_c_picture_boc').append(pan_pic)






/////////////////////////////////////////////////////

// url에서 특정정보
function get_url_info(key) {
    // 1) url에 있는 문자열 가져오기
    let url = location.href; // product.html?xcode=044&cate_no=0&genre=men

    // 2) ? 뒤에꺼만(정보) 잘라내기
    url = url.split("?"); // [product.html , xcode=044&cate_no=0&genre=men]

    if(url.length > 1) {

        url = url[1]; // xcode=044&cate_no=0&genre=men

        // 3) &(정보별)로 나누기
        url = url.split("&"); // [xcode=044  ,  cate_no=0  ,  genre=men]

        // 4) 각 방마다 'cate_no' 있는지 체크
        for(let i=0; i<url.length; i++) {
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


