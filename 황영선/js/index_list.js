let cateNo = get_url_info("cate_no");
let itemNo = get_url_info("item_no");

$('.sec_title').text(menu_array[cateNo]);

for(let i=0; i< B_LIST[cateNo].length; i++) {
    $('.sec_midd_title').append(`<div class="sec_mid_name">${B_LIST[cateNo][i].title}</div>`)
}


let tmp_qty = itemNo+20;
if(tmp_qty > M_LIST[1].length) {
    tmp_qty = M_LIST[1].length;
}

load_item(M_LIST[1], $(`#best .item_container_ul`), itemNo, tmp_qty)



function load_item(data , el, start_index, end_index) {
    for(let i= start_index ; i< end_index; i++) {
        let list = `<li class="item_container_li">
                        <div class="item_img_box">
                            <a href="product.html?cate_no=${1}&item_no=${data[i].item_no}">
                                <img src="./사진/best_plus/${data[i].src}" alt="" class="item_img">
                            </a>
                            <form name="item_shop" action="" class="item_shop_page">
                                <select name="item_sec_color" id="color" class="sec_color">
                                    <option value="color">컬러선택</option>`;

                        for(let j=0; j<data[i].color.length; j++) {
                            list += `<option value="${data[i].color[j]}">${data[i].color[j]}</option>`;
                        }
                                    // <option value="brown">${data[i].color}</option>
                                    // <option value="black">${data[i].color}</option>
                    list += `    </select>
                                <select name="item_sec_size" id="size" class="sec_size">
                                    <option value="size">사이즈선택</option>
                                    <option value="free">free</option>
                                </select>
                                <div class="item_calc">
                                    <div class="item_calc_plus">+</div>
                                    <div class="item_calc_num">1</div>
                                    <div class="item_calc_minus">-</div>
                                </div>
                                <input type="button" value="장바구니담기" class="item_cart_put"></input>
                            </form>
                            <div class="item_quick"></div>
                        </div>
                        <div class="item_color_box">`;


                        for(let j=0; j<data[i].color.length; j++) {
                            list += `<img src="./사진/기타/${data[i].color[j]}.jpg" alt="">`;
                        }
                list += `</div>
                        <div class="item_info">
                            <div class="item_title">${data[i].item_title}</div>
                            <div class="item_o_price">${data[i].o_price}</div>
                            <div class="item_s_price">${data[i].s_price}</div>
                        </div>

                        <div class="item_user">
                            <div class="item_heart">
                                <img src="./사진/기타/heart-01.png" alt="" class="heart_line">
                                <img src="./사진/기타/heart-02.png" alt="" class="heart_color">
                            </div>
                            <div>
                                <img src="../사진/기타/cart (1).png" alt="장바구니" class="item_shop_basket">
                            </div>
                        </div>
                    </li>`;


        el.append(list)
    }
}

let cart_chk = true;
$('.item_shop_basket').click(function(){  
    let el = $(this).parents('.item_container_li');

    // 현재 올라와 있으면 true, 내려가 있으면 false
    let up_down_chk = el.find('.item_shop_page').hasClass('item_shop_page_active')

    $('.item_shop_page').removeClass('item_shop_page_active');

    // if(!up_down_chk) {
    if(up_down_chk == false) {
        el.find('.item_shop_page').addClass('item_shop_page_active')
    }


    // el.find('.item_shop_page').toggleClass('item_shop_page_active')
console.log(111)
    if($(window).innerWidth() < 600) {
        $('.black_pan').addClass('black_pan_active');

        // 정보 넣기 - img, m_i_title, m_i_s_price
        let tmp_src = el.find('.item_img').prop('src');
        $('.m_i_main img').prop('src', tmp_src);
 
        let tmp_title = el.find('.item_title').text() 
        // console.log(tmp_title);
        $('.m_i_title').text(tmp_title)


        let tmp_s_price = el.find('.item_s_price').text() 
        $('.m_i_s_price').text(tmp_s_price)


    }
})

// 레이어팝업에서 '닫기' 누르는거
$('.close').click(function(){
    $('.black_pan').removeClass('black_pan_active')
})

$(window).resize(function(){
    if($(window).innerWidth() > 600) {
        $('.black_pan').removeClass('black_pan_active')
    }
})


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




// + - 누르면 수량 변경 
$(document).on('click', '.item_calc_plus', function(){
    let cal = Number($(this).next().text()) + 1;
    $(this).next().text(cal); 
})
$(document).on('click', '.item_calc_minus', function(){
    if($(this).prev().text() > 1) {
        let cal = Number($(this).prev().text()) - 1;
        $(this).prev().text(cal); 
    } 
})