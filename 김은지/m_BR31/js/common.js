//m_nav////////////////////////////////////////////////////////////////
//햄버거 버튼 클릭시 펼쳐짐
$('.ham_btn_wrap').click(function(){
    $('.m_nav').css({left: 0})
    $('.m_nav_back').css({display: 'block'})
})
$('.nav_close').click(function(){
    $('.m_nav').css({left: '-360px'})
    $('.m_nav_back').css({display: 'none'})
})
//메뉴 li 클릭시 아래로 하단메뉴 펼쳐짐
let nav_chk = true;

$('.m_nav_mid > li').click(function(){
    if(nav_chk) {
        $(this).children('a').css({color: '#ff699b'})
        $(this).find('.nav_inside').css({height: 'auto'})
        nav_chk = false;
    }
    else {
        $(this).children('a').css({color: 'black'})
        $(this).find('.nav_inside').css({height: '0'})
        nav_chk = true;
    }
})




//gnb///////////////////////////////////////////////////////////////////
//호버시 펼쳐짐
// $('.gnb_li').hover(function(){
//     $('.gnb_panbox').css({display: 'block'})
//     $('.gnb_contents').css({display: 'block'})

// }, function(){
//     $('.gnb_panbox').css({display: 'none'})
//     $('.gnb_contents').css({display: 'none'})
// })

// $('.gnb_panbox').hover(function(){
//     $('.gnb_panbox').css({display: 'block'})
//     $('.gnb_contents').css({display: 'block'})
// }, function(){
//     $('.gnb_panbox').css({display: 'none'})
//     $('.gnb_contents').css({display: 'none'})
// })
// //gnb 고정 - fixed
// let gnb_top = $('.gnb').offset().top;

// $(window).scroll(function(){
//     let s_top = $(window).scrollTop();
    
//     if(s_top >= gnb_top) {
//         $('.gnb_ul').addClass('gnb_active')
//         $('.gnb_pan').addClass('gnb_pan_active')
//     }
//     else {
//         $('.gnb_ul').removeClass('gnb_active')
//         $('.gnb_pan').removeClass('gnb_pan_active')
//     }
// })
//get_url_info/////////////////////////////////////////////////////////
function get_url_info(key) {

    let url = location.href;
    url = url.split('?');

    if(url.length > 1) {
        url = url[1];
        url = url.split('&');

        for(let i=0; i<url.length; i++) {   
            if(url[i].indexOf("#") > -1) {   
                url[i] = url[i].split("#")[0];
            }
            
            let tmp_url = url[i].split("=") 
                                            
            if(tmp_url[0] == key) {
                return tmp_url[1];
            }
        }
    }
}

//load_item////////////////////////////////////////////////////////////
function load_item (sec_id, start, qty, data, cateNo) {
    for(let i=start; i<qty; i++){
        let list = "";
        if(sec_id == 'best') {
            if(i>=3){
                list +=`<div class="weeklybest_item swiper-slide">
                <div class="weeklybest_number number4">${i+1}</div>`
            }
            else {
                list +=`<div class="weeklybest_item swiper-slide">
                            <div class="weeklybest_number number${i+1}">${i+1}</div>`
            }
        }
        else {
            list +=`<div class="item">`;
        }
// console.log(data[i])        
            list +=`    <div class="item_title"><a href="m_detail.html?cate_no=${cateNo}&item_no=${data[i].item_no}">${data[i].title}</a></div>`;
            
        if(sec_id == 'best') {
            list +=`<div class="item_icon">
                        <div class="icon_heart">
                            <img src="./img/icon_heart.png" alt="icon_heart">
                        </div>
                        <div class="icon_cart">
                            <img src="./img/icon_cart.gif" alt="icon_cart">
                        </div>
                    </div>`;
        }
        else {
            list +=`    <div class="item_desc">${data[i].desc}</div>
                        <div class="btn_buynow"><a href="#">구매</a></div>`;    
        }
            list +=`    <a href="m_detail.html?cate_no=${cateNo}&item_no=${data[i].item_no}">`;
            list +=`        <div class="${sec_id}_box">`;
            
        if(sec_id == 'best' || sec_id =='icecream') {
            list +=`            <img class="icecream_cone" src="./img/bg_icecream_corn_4.png" alt="bg_icecream_corn">`;
        }

            list +=`            <img class="${sec_id}" src="./img/item/${sec_id}/${data[i].src}" alt="${sec_id}">`;
            list +=`        </div>`;
            list +=`    </a>`;
            list +=`</div>`;
    
            $(`#${sec_id} .item_box`).append(list)
        
    }
}
