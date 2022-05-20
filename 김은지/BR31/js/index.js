// if(navigator.maxTouchPoints >= 1) {
//     // 태블릿 & 모바일
//     location.replace('http://harang.dothome.co.kr/%EB%B0%B0%EB%9D%BC31/m_index.html')
// }


//mainbanner///////////////////////////////////////
//////////////////////////////////////////////////////
let m_banner = $('.mainbanner')
let m_b_length = $('.mainbanner').length;
let timer = 1000;
// console.log(m_b_length)
let count = 0;

//인디 만들어 넣기
for(let i=0; i<m_b_length; i++){
    $('.indi_box').append(`<div class="indi indi${i}"></div>`)
}
//첫번째 인디에 색 주기
$('.indi').first().addClass('indi_active')

//클릭시
$('#btn_next').click(function(){
    slide('-100%', (count + 1) % m_b_length, '100%')
    count+=1;
})
$('#btn_prev').click(function(){
    slide('100%', (count - 1) % m_b_length, '-100%')
    count-=1;
})
$('.indi').click(function(){

    //indi 클릭했을 때 들어올방은 $(this).index()
    if($(this).index() > count){
        slide('-100%', $(this).index(), '100%')
    }
    else if($(this).index() < count){
        slide('100%', $(this).index(), '-100%')
    }
    //현재방 count를 $(this).index()로 바꿔주기
    count = $(this).index();
    
})

//슬라이드 함수
function slide(c_pos, n_pan, n_pos){
    //버튼막기
    $('.slide_btn, .indi').css({pointerEvents: 'none'})
    setTimeout(function(){
        $('.slide_btn, .indi').css({pointerEvents: 'auto'})
    }, timer)
    //나갈판
        m_banner.eq(count % m_b_length).animate({
            left: c_pos
        }, timer)
    //들어올판
        m_banner.eq(n_pan).css({
            left: n_pos
        }).animate({
            left: '0'
        }, timer)
    //인디 투명도 조절
    $('.indi').eq(count % m_b_length).removeClass('indi_active');   
    $('.indi').eq(n_pan).addClass('indi_active');
}

//자동 슬라이드
let int_box;
auto_slide()

function auto_slide(){
    int_box = setInterval(function(){
        $('#btn_next').trigger('click')
    }, timer + 2000)
}
$('.mainbanner_box').hover(function(){
    clearInterval(int_box)
}, function(){
    auto_slide()
})


//weeklybest///////////////////////////////////////
/////////////////////////////////////////////////////
//불러오기
$('.sec0').attr('id', menu_array[0])
$('.sec0 > .sec_title').text(title_array[0])

load_item(menu_array[0], 0, 3, ITEM_LIST[0], 0);

//아이스크림 이미지 여러개 배치
for(let i=2; i<13; i++) {
    let best_img = `<img class="best" src="./img/item/icecream/${i}.png" style="margin-top: 10px;" alt="best">`; 

    $('.best_box').append(best_img)
}


//스크롤시 이미지 사라지고 하나만 남기
let week_top = $('.sec0').offset().top;
let best_length = $('.best_box > .best').length;
// console.log(best_length)

$(window).scroll(function(){
    let s_top = $(window).scrollTop();
    // console.log(s_top, week_top)
    
    if(s_top >= week_top - 700){
        // console.log(1212)

        let week_count = 11;
        let week_intbox = setInterval(function(){
// console.log(week_count);
            
            $('.best_box').eq(0).children('.best').eq(week_count).remove()
            $('.best_box').eq(1).children('.best').eq(week_count).remove()
            $('.best_box').eq(2).children('.best').eq(week_count).remove()

            week_count -= 1;
            if(week_count == 0){
                clearInterval(week_intbox)
            }
        }, 50)
    }
})


//event/////////////////////////////////////////
/////////////////////////////////////////////////

// 화면 사이즈 바뀔때마다 바뀌는 event_box left값 구하기
let event_width = $('.event_box').outerWidth();
let event_length = $('.event_box').length;
// setTimeout(function(){
    for(i=0; i<event_length; i++){
        $('.event_box').eq(i).css({left: event_width * i})
    }
// }, 100)

$(window).resize(function(){
    event_width = $('.event_box').outerWidth();
    event_length = $('.event_box').length;
    
    for(i=0; i<event_length; i++){
        $('.event_box').eq(i).css({left: event_width * i})
    }
})
//한칸 슬라이드

let event_last_left = $('.event_box').last().position().left;
let event_count = 0;
let event_timer = 1000
$('#event_btn_next').click(function(){
    //버튼막기
    $('.event_btn_slide').css({pointerEvents: 'none'})
    setTimeout(function(){
        $('.event_btn_slide').css({pointerEvents: 'auto'})
    }, event_timer)
    //나갈방
    $('.event_box').animate({
        left: `-=${event_width}`
    }, event_timer)
    //들어올방 맨 끝으로 보내기
    $('.event_box').eq((event_count) % event_length).animate({
        left: event_last_left
    }, 0)
    
    event_count += 1;
})

$('#event_btn_prev').click(function(){
    //버튼막기
    $('.event_btn_slide').css({pointerEvents: 'none'})
    setTimeout(function(){
        $('.event_btn_slide').css({pointerEvents: 'auto'})
    }, event_timer)

    event_count -= 1;
    //들어올방 맨 앞에서 한칸 앞으로 보내기
    $('.event_box').eq(event_count % event_length).animate({
        left: -event_width
    }, 0)
    //나갈방
    $('.event_box').animate({
        left: `+=${event_width}`
    }, event_timer)


})


//br_menu ///////////////////////////////////////
////////////////////////////////////////////////////

//title color 설정
let color_array = ['#fe96bf','#fec020', '#ffa2ad', '#bc7d4f', '#ff9800', '#eb78a9']

for(let i=0; i<color_array.length; i++){
    $('.menu_title').eq(i).css({color: color_array[i]})
}

//박스 애니메이션
let menu_top = $('.br_menu').offset().top;
// console.log(`menu_top:${menu_top}`)
let menu_height = $('.br_menu').outerHeight();

let menu_count = 0;
$(window).scroll(function(){
    let w_top = $(window).scrollTop();
    let m_amount = '25%'
    if(w_top >= menu_top - 400){
        // console.log(1111)
        let box_ani_timer = 300;
        // for(let menu_count = 0; menu_count < $('.menubox').length; menu_count++){
        for(let i = 0; i < $('.menubox').length; i++){
            setTimeout(function(){
                if(i % 2 == 0){
                    $('.menubox').eq(i).animate({
                        left: m_amount
                    }, box_ani_timer)
                }
                else if(i % 2 == 1){
                    $('.menubox').eq(i).animate({
                        right: m_amount
                    }, box_ani_timer)
                }
            }, i * 100)
        }
        
        // let box_ani = setInterval(function(){
            // console.log(1111)
            // if(menu_count % 2 == 0){
            //     $('.menubox').eq(menu_count).animate({
            //         left: m_amount
            //     }, box_ani_timer)
            // }
            // else if(menu_count % 2 == 1){
            //     $('.menubox').eq(menu_count).animate({
            //         right: m_amount
            //     }, box_ani_timer)
            // }
            // menu_count+=1; 
            // if(menu_count >= 6) {
            //     clearInterval(box_ani)
            // }
        // }, 100);
    
    
    }
})

//sns////////////////////////////////////////////
/////////////////////////////////////////////////
let sns_length = $('.sns_img').length;

//sns_img 넣기
for(i=0; i<sns_length; i++){
    $('.sns_img').eq(i).css({
        background: `url(./img/sns/${i}.jpeg) no-repeat center/ cover`
    })
}

//sns_icon 효과주기
let sns_top = $('.sns').offset().top;
let sns_height = $('.sns').outerHeight();
let sns_timer = 300;

$(window).scroll(function(){

    let w_top = $(window).scrollTop();
    let sns_count = 0;

    if(w_top >= sns_top - 800){

       let sns_intbox = setInterval(function(){
           $('.sns_icon_img').eq(sns_count).addClass('sns_tmp_ani')
            // $('.sns_icon_img').eq(sns_count).css({
            //     transform: 'translateY(0px) rotateY(360deg)',
            //     transition: 'all 0.5s'
            // })
            
            sns_count += 1;
           
            if(sns_count >= sns_length){
                clearInterval(sns_intbox)
            }
        }, sns_timer - 100)
    }
})

