

/* 메인 베너 */

// 메인베너 페이드 - 동영상 재생에 맞춰서
let c_main_bn = 0;
let main_bn_count = $('.main_bn_comm').length;
let main_bn_timer = 300;


let vedio_chk = "";
main_bn_auto()

function main_bn_auto() {
    vedio_chk = setInterval(function(){

        console.log(c_main_bn, $(`.v_${c_main_bn % main_bn_count}`).prop('ended'))
    
        if($(`.v_${c_main_bn % main_bn_count}`).prop('ended')){
            clearInterval(vedio_chk);
            $('.main_bn_comm').eq(c_main_bn % main_bn_count).delay(main_bn_timer).css({zIndex:1}).fadeOut(0)
            $('.main_bn_comm').eq((c_main_bn+1) % main_bn_count).css({zIndex:99}).fadeIn(main_bn_timer)
            c_main_bn += 1
            $(`.v_${c_main_bn % main_bn_count}`).get(0).play()
    
            main_bn_auto()
        }
        
    }, 200);
}

// 메인 더보기 버튼 애니메이션


let mb_btn_ani_timer = 400;

function mb_btn_ani(){
    $('.main_show_more').eq(0).animate({
        top: "43%"
    },mb_btn_ani_timer).animate({
        top: "45%"
    },mb_btn_ani_timer)
    $('.main_show_more').eq(1).animate({
        top: "32%"
    },mb_btn_ani_timer).animate({
        top: "35%"
    },mb_btn_ani_timer)
};
mb_btn_ani()

let mb_btn_ani_int = setInterval(function(){
    mb_btn_ani()
},mb_btn_ani_timer*2);

function mb_btn_ani_auto (){
    mb_btn_ani_int = setInterval(function(){
        mb_btn_ani()
    },mb_btn_ani_timer*2);

    mb_btn_ani()
};


// 메인 더보기 기능 - 호버
$('.show_more_btn, .show_more_box').hover(function(){
    
},function(){

});

let show_btn_chk = true;
$('.show_more_btn').click(function(){
    if (show_btn_chk) {
        $('.show_more_box').css({
            display: "block"
        });

        $('.main_show_more').stop(true);
        $('.main_bn_comm').stop(true);
         //뒤에 애니메이션 뭐가 있든 전부 멈춰라
        clearInterval(mb_btn_ani_int);

        show_btn_chk = false;
    }
    else{
        $('.show_more_box').css({
            display: "none"
        })
        mb_btn_ani_auto ()
        
        show_btn_chk = true;
    }
})


// $('.show_more_btn, .show_more_box').hover(function(){
    
//     $('.show_more_box').css({
//         display: "block"
//     });
//     $('.main_show_more').stop(true)
//     $('.main_bn_comm').stop(true)
//      //뒤에 애니메이션 뭐가 있든 전부 멈춰라
//     clearInterval(mb_btn_ani_int)
// },function(){

//     $('.show_more_box').css({
//         display: "none"
//     })
//     mb_btn_ani_auto ()
// });


/* 장보기 */

// 방마다 left값 부여

let shop_item_length = $('.shop_item').length
let w_shop_item = $('.shop_item').eq(0).outerWidth()

for (i=0; i <shop_item_length; i++) {
    $('.shop_item').eq(i).css({
        left: w_shop_item * i
    });
};
// 리사이징 될때마다 left값 다시 구하기
$(window).resize(function(){
    clearInterval(main_shop_auto_int);
    shop_cur_bn = 0
    w_shop_item = $('.shop_item').eq(0).outerWidth()
    for (i=0; i <shop_item_length; i++) {
        $('.shop_item').eq(i).css({
            left: w_shop_item * i
        });
    };
    shop_item_box_last_pos = $('.shop_item').last().position().left
    // console.log(shop_item_box_last_pos);    
    main_shop_auto ()

    $('.shop_item_box').css({
        height: $('.shop_item').eq(0).outerHeight() +5
    });
});

// shop 오토 슬라이드
let shop_cur_bn = 0
let shop_item_box_count = $('.shop_item').length
let shop_item_box_last_pos = $('.shop_item').last().position().left
// console.log(shop_item_box_last_pos);    
let main_shop_timer = 500

$(document).on("click", '.btn_next', function(){
// console.log("shop_cur_bn: " + shop_cur_bn);    
    $('.btn').css({pointerEvents:"none"});
    setTimeout(function(){
        $('.btn').css({pointerEvents:"all"})
    },main_shop_timer+100);
    
    $('.shop_item').animate({
        left : `-=${w_shop_item}px` // 현재 left값 저장하고 다시 거기서 left는 얼마 가라
    },main_shop_timer);
    $('.shop_item').eq(shop_cur_bn % shop_item_box_count).animate({ 
        left : shop_item_box_last_pos
    },0);

    shop_cur_bn+=1;
});

$(document).on("click", '.btn_prev', function(){
    shop_cur_bn-=1;
// console.log("shop_cur_bn: " + shop_cur_bn);    
    $('.btn').css({pointerEvents:"none"}); // Event's'!
    setTimeout(function(){
        $('.btn').css({pointerEvents:"all"})
    },main_shop_timer+100);

    $('.shop_item').eq((shop_cur_bn)  % shop_item_box_count).animate({
        left: `-${w_shop_item}px`
    },0);
    $('.shop_item').animate({
        left : `+=${w_shop_item}px`
    },main_shop_timer);
    
});

let main_shop_auto_int = "";

function main_shop_auto () {
    main_shop_auto_int = setInterval(function(){
        $('.btn_next').trigger('click')
    }, main_shop_timer + 2000)
}
main_shop_auto ()

$('.shop_img_box, .btn_box').hover(function(){ //btn 누르는 순간에 setInterval이 작동하면 물릴수 있음.
    clearInterval(main_shop_auto_int)
}, function(){
    main_shop_auto ()
})


// grwz 자동 슬라이드 스몰배너 
let sm_banner_w = $('.sm_txt').eq(0).outerWidth();
setTimeout(function(){
    sm_banner_w = $('.sm_txt').eq(0).outerWidth();

    auto_sm_bn();

}, 100)
setInterval(function(){
    auto_sm_bn()
}, 10000)

function auto_sm_bn(){
    $('.sm_txt').eq(0).animate({
        left: 0
    }, 0).animate({
        left: `-${sm_banner_w}px`
    }, 10000, "linear");


    $('.sm_txt').eq(1).animate({
        left: `${sm_banner_w}px`,
    }, 0).animate({
        left: 0
    },10000 ,"linear");

//  grwz 아코디언 펼치기
    let grwz_date_chk = true
    $('.grwz_date').click(function(){
        if(grwz_date_chk) {
            $('.grwz_hidden').removeClass('grwz_hidden_active')
            $(this).next().addClass('grwz_hidden_active')
            
            $('.grwz_r_pos').css({
                transform: `translateY(-${$(this).position().top}px)`
            })
            $(this).find('.open_btn').css({
                backgroundPosition: `-20px 0px`
            })
            grwz_date_chk = false;
            
        }
        else {
            $('.grwz_hidden').removeClass('grwz_hidden_active');
            $('.grwz_r_pos').css({
                transform: `translateY(0px)`
            });
            $(this).find('.open_btn').css({
                backgroundPosition: `4px 0px`
            });
            grwz_date_chk = true;
        }
    })

    /* 분리수거 섹션 */
    $('.waste_btn').click(function(){
        $('.ex_li').css({display:'none'});
        $('.ex_li').eq($(this).index()).css({
            display : "block"
        });
        $('.waste_btn').removeClass('waste_btn_bg')
        $(this).addClass('waste_btn_bg')
    });
}; 

/* 장보기 섹션 부모 높이 구해주기 */
$('.shop_item_box').css({
    height: $('.shop_item').eq(0).outerHeight() +5
});

/* grwz 섹션 부모 높이 구해주기 */
$('.grwz_date').eq(0).outerHeight() *7
console.log( "height:" + $('.grwz_date').eq(0).outerHeight() *7)
$('.grwz_r').css({
    height: $('.grwz_date').eq(0).outerHeight() *7
})