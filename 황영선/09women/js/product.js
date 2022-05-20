let cateNo = get_url_info("cate_no");
let itemNo = get_url_info("item_no") -1;
if(cateNo < 0) {
    // alert("잘못된 접근입니다.")
    location.replace('index.html')
}

console.log(M_LIST[cateNo][itemNo])

let data = M_LIST[cateNo][itemNo];

// $('.pro_main_img > img').attr('src', `./사진/best_plus/${data.src}`)
// $('.p_title').text(data.item_title)
// $('.p_s_price').text(data.s_price+"원")
 



$('.p_color').change(function(){

    $('.size').css({display: 'table-row'})
    
    $('.p_size').val('size')

})
$('.p_size').change(function(){

    let list = `
        <div class="payment">
            <div class="pay_col_size">
                <span class="color">${$('.p_color').val()}</span>
                <span class="slash">/</span>
                <span class="pay_size">free</span>
            </div>
            <div class="pay_calc">
                <div class="pay_plus">+</div>
                <div class="pay_num">1</div>
                <div class="pay_minus">-</div>
            </div>
            <div class="pay_price">
                <div class="pay_total">${$('.p_s_price > span').text()}</div>
                <div class="pay_won">원</div>
            </div>
        </div>`;

    $('.pay_box').append(list)

    console.log($('.p_color').val()); 

    make_total()
})

function make_total() {
    let tmp_total = 0;
    for(let i=0; i<$('.pay_total').length; i++) {
// console.log($('.pay_total').eq(i).text())        
        // 52,000 => 52000
        tmp_total+=  Number($('.pay_total').eq(i).text().replace(",",""))
    }
    $('.num').text(comma(tmp_total));
}

// 계산
$(document).on('click', '.pay_plus', function(){
    let cal = Number($(this).next().text()) + 1;
    $(this).next().text(cal);

    let total = cal * 52000;
    $(this).parents('.payment').find('.pay_total').text(comma(total));
    // $(this).parents('.pro_title_box').find('.num').text(comma(total));

    make_total()
})
$(document).on('click', '.pay_minus', function(){
    if($(this).prev().text() > 1) {
        let cal = Number($(this).prev().text()) - 1;
        $(this).prev().text(cal)

        let total = cal * 52000;
        $(this).parents('.payment').find('.pay_total').text(comma(total));
        // $(this).parents('.pro_title_box').find('.num').text(comma(total));


        make_total()
    }
    else {
        alert("최소 주문 수량은 1개 입니다.")
    }
})

function comma(don) {
    return don.toLocaleString('ko-kr'); // 52000 -> 52,000
}

// heart 클릭했을때
let heart_chk = true;
$('.item_heart').click(function(){
    if(heart_chk == true) {
        $(this).children('.heart_line').css({
            display: 'none'
        })
        $(this).children('.heart_color').css({
            display: 'inline-block'
        })
        heart_chk = false;
    }
    else if(heart_chk == false) {
        $(this).children('.heart_line').css({
            display: 'inline-block'
        })
        $(this).children('.heart_color').css({
            display: 'none'
        })
        heart_chk = true;
    }
})


// 구매후기 추천순 텍스트 클릭하면 볼드하게 
let prp_chk = true;
$('.prp_left_text').click(function(){
    // if(prp_chk == true) {
        $('.prp_left_text').removeClass('prp_l_text_active')
        $(this).addClass('prp_l_text_active')
    //     prp_chk = false;
    // }
    // else if (prp_chk == false){
    //     $('.prp_left_text').removeClass('prp_l_text_active')
    //     prp_chk = true;
    // }
})