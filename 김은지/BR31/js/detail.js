// if(navigator.maxTouchPoints >= 1) {
//     // 태블릿 & 모바일
//     location.replace('http://harang.dothome.co.kr/%EB%B0%B0%EB%9D%BC31/m_detail.html')
// }


let c_no = get_url_info('cate_no');
let i_no = get_url_info('item_no');

let item_addr = menu_array[c_no];
let tmp_data = ITEM_LIST[c_no][i_no - 1];

//아이스크림 이미지와 이름 불러오기
$('.item_img_box').append(`<img class="icecream" src="./img/item/${item_addr}/${tmp_data.src}" alt="${item_addr}">`);
$('.item_title, .option_title').text(tmp_data.title)

//사이즈 설명에 천단위 , 넣어주기
for(let i=0; i<8; i++){
    // console.log($('.size_price').eq(i).text())
    let price = Number($('.size_price').eq(i).text());
    $('.size_price').eq(i).text(comma(price))

}
//아이스크림 페이지가 아닐경우 detail박스 안나오게 하기
for(let i=2; i<6; i++){
    if(c_no == i) {
        $('.item_buy_box').css({display: 'none'})
        $('.icecream_cone').css({display: 'none'})
        $('.price_wrap').css({display: 'block', border: 'none'})
    }

}


//사이즈 옵션 선택시 옵션 박스에 입력
$('.size').click(function(){

    //이미 있는 옵션임을 알려주기
    let size_chk = true;

    let tmp_index = $(this).attr('id');
    
    // console.log($('.hidden_index').val())
    
    for(let i=0; i<=8; i++) {
        if(tmp_index == $('.hidden_index').eq(i).val()) {
            alert("이미 선택한 상품 입니다.")
            size_chk = false;
        }
    }
    if(size_chk) {
        let tmp = $(this).find('.size_title').text();
        let tmp_price = $(this).find('.size_price').text();

        // console.log(tmp_index)
    
        let load_choose_opt = `<div class="choose_wrap">
                                    <div class="opt_name">
                                        <span class="option_title">${tmp_data.title}</span>
                                        <span>,</span>
                                        <span class="option_size">${tmp}</span>
                                        <div class="item_price"><span>${tmp_price}</span>원</div>
                                    </div>
                                    <div class="choose_box opt_qty">
                                        <input type="button" value="-" class="btn_qty qty_minus">
                                        <input type="text" value="1" class="qty_num">
                                        <input type="button" value="+" class="btn_qty qty_plus">
                                        <input type="text" value="${tmp_index}" class="hidden_index">
                                    </div>
                                    <img class="choose_box btn_close" src="./img/btn_close.png" alt="btn_close">
                                </div>`
    
        $('.choose_p_wrap').append(load_choose_opt)

        detail_height_plus()
        total_price()
    }
})

//칸 늘어날때마다 detail 높이 변경해주기

function detail_height_plus() {
    let detail_height = $('.detail').outerHeight();
    // console.log(detail_height)
    $('.detail').css({height: `${detail_height+70}px`})
}
function detail_height_minus() {
    let detail_height = $('.detail').outerHeight();
    // console.log(detail_height)
    $('.detail').css({height: `${detail_height-70}px`})
}



// 수량 바꿔주기
$(document).on('click', '.qty_minus', function(){
    let cur_val = Number($(this).next().val()) - 1

    if(cur_val < 1 ) {
        alert('최소 주문수량은 1개 입니다.')
    }
    else {
        $(this).next().val(cur_val)

        total_price()
    }

})

$(document).on('click', '.qty_plus', function(){

    let cur_val = Number($(this).prev().val()) + 1
    $(this).prev().val(cur_val)

    total_price()
})

// btn_close 클릭시 해당 박스 없애기
$(document).on('click', '.btn_close', function(){
    $(this).parent().remove()
    
    total_price()
    handpack_out()
    detail_height_minus()
})

// 총 가격 구하기
function total_price() {
    let total_price = 0;

    for(let i=0; i<$('.item_price').length; i++) {
        //계산할때는 , 빼주기
        total_price += Number($('.item_price').eq(i).children('span').text().replace(",","")) * Number($('.qty_num').eq(i).val());
    }
    $('.number').text(comma(total_price))
}

// 천단위 콤마찍기
function comma(num) {
    return num.toLocaleString('ko-KR')
}


//////////////////////////////////////////////////////////////////

//handpack선택시 handpack_opt_wrap (display: block)
// $('.size_l').click(function(){
//     $('.handpack_opt_wrap').css({display: 'none'});
// })
$('.size_r').click(function(){
    $('.handpack_opt_wrap').css({display: 'block'});  

    // console.log($('.hidden_index').length)
    handpack_out()
})

//hidden_index val()안에 c5, c6, c7, c8 중에 하나도 없으면 handpack_opt_wrap 디스플레이 빼기  
function handpack_out() {
    let handpack_length = $('.hidden_index').length;
    let chk_pack = ["c5","c6","c7","c8"];
    let chk_result = true;
    for(let i=0; i<handpack_length; i++){
        // console.log($('.hidden_index').eq(i).val())
        for(let j=0; j<chk_pack.length; j++) {
            if($('.hidden_index').eq(i).val() ==  chk_pack[j]) {
                chk_result = false;
                break;
            }
        }
    }
    if(chk_result) {
        $('.handpack_opt_wrap').css({display: 'none'})
        $('.handpack_plus').css({display: 'none'})
        detail_height_minus()
    }


}

//handpack 안에 추가 옵션 아이스크림 이미지와 이름 불러오기
function load_flavor() {
    for(let i=0; i < ITEM_LIST[1].length; i++) {
        let flavor_list = `<div class="flavor swiper-slide">
        <img src="./img/item/icecream/${i+1}.png" alt="icecream">
        <div class="flavor_title">${ITEM_LIST[1][i].title}</div>
        </div>`
        
        $('.flavor_box').append(flavor_list)
    }
}

load_flavor()


// flavor 선택시 option_title2에 이름 찍어주기
// let flavor_count = 1;
$('.flavor').click(function(){
    if($('.handpack_plus').length > 4){
        alert('더이상 추가할 수 없습니다.')
    }
    else {
        let flavor_title = $(this).find('.flavor_title').text();
        // console.log(flavor_title)
        
        let load_handpack_plus =`<div class="choose_wrap handpack_plus">
        <span>(추가)</span>
        <span class="option_title2">${flavor_title}</span>
        <img class="choose_box btn_close" src="./img/btn_close.png" alt="btn_close">
        </div>`;
        
        $('.handpack_plus_wrap').append(load_handpack_plus)
        detail_height_plus()
        // flavor_count += 1;
    }
})


//swiper //////////////////////////////////////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 5,
    slidesPerGroup: 4,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop: true,
//   autoplay: true,
//   autoplay: {
//     delay: 500,
//     },
    speed: 500,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
});