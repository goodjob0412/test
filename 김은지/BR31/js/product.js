// if(navigator.maxTouchPoints >= 1) {
//     // 태블릿 & 모바일
//     location.replace('http://harang.dothome.co.kr/%EB%B0%B0%EB%9D%BC31/m_product.html')
// }


let c_no = get_url_info('cate_no');

// let tmp = 20;
// if(ITEM_LIST[c_no].length < 20) {
//     tmp = ITEM_LIST[c_no].length;
// } 

// console.log(c_no)
if(c_no == 1){
    $('.swiper').css({display: 'block'});
    $('.swiper').attr('id', menu_array[0])
    // $('.swiper > .sec_title').text('BEST 9')
    $('.swiper').css({marginBottom: '50px'})
    
    // console.log(1111)
    load_item(menu_array[0], 0, ITEM_LIST[0].length, ITEM_LIST[0], 0);    
}

$('.topbanner').css({
    background: `url(./img/product_banner/${c_no}.gif) no-repeat center / cover`  
});
$('.sec').attr('id', menu_array[c_no])
$('.sec > .sec_title').text(title_array[c_no])

load_item(menu_array[c_no], 0, ITEM_LIST[c_no].length, ITEM_LIST[c_no], c_no);

$('.sec > .item_box').css({border: '1px solid #ebebeb', borderWidth: '1px 0 0 1px'})
$('.sec > .item_box > .item').css({border: '1px solid #ebebeb', borderWidth: '0 1px 1px 0'})
    
//만약 c_no=1 이면 best랑 icecream 같이 찍기





var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
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
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});



