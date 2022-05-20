
/* //////////////////// 상세 정보 ///////////////////// */

let info_chk = [false,true,true,true]; 

$('.info_title').click(function(){
    let tmp_index = $(this).index() / 2;
    if (info_chk[tmp_index]){
        $(this).next().addClass('detail_info_h')
        info_chk[tmp_index] = false

        $(this).children('.open_btn').css({
            backgroundPositionX : "-20px"
        })
    }
    else {
        $(this).next().removeClass('detail_info_h')
        info_chk[tmp_index] = true
        
        $('.open_btn').css({
            backgroundPositionX : "0px"
        })
    }
});



/* //////////////////// 결제 부분 ///////////////////// */

// 옵션 타이틀 누르면 옵션창 보이고 안보이게 

let opt_chk = true;
$('.option_title').click(function(){
    // console.log(00)
    if(opt_chk) {
        $('.option_box').css({
            display : "block"
        })
        $(this).find('.open_btn').css({
            backgroundPositionX : "-20px"
        })
        opt_chk = false; // chk값을 false로 바꿔서 다음 클릭시에 else를 바로 실행시킬 수 있게
    }
    else {
        $('.option_box').css({
            display : "none"
        })
        $(this).find('.open_btn').css({
            backgroundPositionX : "0px"
        })
        opt_chk = true;
    }
    
});


// 옵션 누르면 밑에 옵션 창 띄워주기
$(document).on('click','.option', function(event){
// $('.option').click(function(event){ //event라는 걸 function에서 못알아보니까 매개변수 식으로 알아보게끔 해준거.
    event.stopPropagation(); // 부모가 버블링 돼서 위에 것도 클릭 된 것처럼 돼서 그거 처리.
    $('.option_box').css({
        display : "none"
    })

    $('.open_btn').css({
        backgroundPositionX : "0px"
    })

    opt_chk = true;

    // select_area 내부 hidden_index에 현재 클릭한 번쨰꺼 있는지 확인 
    // console.log($('.hidden_index').length);

    let tmp_list_chk = true; 
    if($('.hidden_index').length >= 1) { // append 된게 0개일 때엔 중복 체크할 거 없이 그냥 넣어주면 되니까.
        for(let i=0; i<$('.hidden_index').length; i++) {
            if($('.hidden_index').eq(i).val() == $(this).index()) {
                alert("이미 선택한 상품입니다.");
                tmp_list_chk = false; // if문을 읽었다는 건, 중복 체크가 됐다는 거고, 그럼 list를 append시켜주면 안되니까, 저 밑에 list append 막기 용도.
                break; // for문 멈추는 용도.
            } 
        }
    }

    if(tmp_list_chk) { // 위에 체크에서 걸리는 게 없을 때, 이리로 들어와서 list가 뭔지 읽고, append시키기
        let list = `
        <div class="selec_box">
            <span class="sel_name">${ITEM_LIST[cate_no][item_no].title}(${$(this).text()})</span>
            <div class="qty_box">
                <div class="minus_btn"></div>
                <input type="text" value="1" class="qty_num" readonly>
                <div class="plus_btn"></div>
            </div>
            <div class="item_price">
                <span>${comma(ITEM_LIST[cate_no][item_no].o_price[$(this).index()])}원</span>
            </div>
            <div class="selec_x_btn"></div>
            <input type="text" class="hidden_index" value="${$(this).index()}"> 
        </div> 
        <div class="total_price">
            총 금액 : <span>2,500원</span>
        </div>
        `;
        $('.select_area').append(list)

        
        make_total_price()
        
    }

});

// x버튼 누르면 부모 삭제

$(document).on('click', '.selec_x_btn', function(){
    $(this).parents('.selec_box').remove()
    make_total_price()
});

// 수량 버튼 기능
$(document).on('click', '.plus_btn', function(){
    let cur_qty = Number($(this).prev().val()) + 1
    $(this).prev().val(cur_qty)
// 처음엔 $(this).val()로 했었는데, 그거 대신 prev랑 next로 하는 이유는, 클래서 btn이 여러군데에서 쓰이니까 무슨 밸류를 가져와야하는지 모름. 그래서 지금 누른 것의 이전 혹은 다음으로 가져오는 것.

    make_total_price()
});
$(document).on('click', '.minus_btn', function(){
    let cur_qty = Number($(this).next().val()) - 1
    if(cur_qty > 0) {
        $(this).next().val(cur_qty)
        // $('.total_price > span').text((2500 * cur_qty).toLocaleString('ko-kr') + "원")
    }
    // else {
    //     alert("최소주문 수량은 1개 입니다.")
    // }

    make_total_price()
});

// 어떤 버튼이 눌려도 동작 해야하는 애. 왜냐하면 어떤 버튼이 눌려도 총 액이 달라지니까.
function make_total_price() {
    let tmp_cur_qty = 0;
    for(let i=0; i<$('.qty_num').length; i++) { // 클래스가 qty_num인 것의 모든 밸류값을 더해서 총 액과 곱해야 하니까.

        let tmp_qty = Number($('.qty_num').eq(i).val());
        let tmp_price = Number($('.item_price').eq(i).children('span').text().replace(',',"").replace('원',""))

        tmp_cur_qty += tmp_qty * tmp_price;


console.log( tmp_price)
    }

// console.log("여기: " + data.o_price)

    $('.total_price > span').text(comma((tmp_cur_qty)) + "원")
}

// 구매 후기 버튼
$('.review_btn').click(function(){
    $('.review_btn').removeClass('review_btn_click')
    $(this).addClass('review_btn_click')
    $('.reveiw_qna_box').css({zIndex:"1"});
    $('.reveiw_qna_box').eq($(this).index()).css({
        zIndex:"2"
    });
});

/////////////////////////////////////////////////////////////////////
// 1. 정보 넘어온거중에 cate_no, item_no 값 얻기
let cate_no = get_url_info("cate_no");
let item_no = get_url_info("item_no");

// 2. list_item에서 해당 정보꺼 아이템 하나만 가져오기
// console.log(ITEM_LIST[cate_no][item_no]);
let data = ITEM_LIST[cate_no][item_no];

// 3. data에서 필요한 정보만 가져와서 바꿀거 바꾸기
$('.l_content_area').append(`<img src="img/shop_page/${MENU_TITLE[cate_no]}/${data.src}" alt="">`)
$('.r_content_area > .name').text(data.title)
$('.r_content_area > .price').text(`￦ ${comma(data.o_price[0])}`)
// console.log("111 : " + data.o_price[0])

// console.log(data.opt.length);
if(data.opt.length > 0) {
    for(let i=0; i<data.opt.length; i++) {
        $('.option_box').append(`<div class="option"> ${data.opt[i]} </div>`)
    }
}
else {
    $('.option_title').css({display: 'none'});

    let list = `
    <div class="selec_box">
        <span class="sel_name">${data.title}</span>
        <div class="qty_box">
            <div class="minus_btn"></div>
            <input type="text" value="1" class="qty_num" readonly>
            <div class="plus_btn"></div>
        </div>
        <div class="item_price">
                <span>${comma(ITEM_LIST[cate_no][item_no].o_price[0])}원</span>
        </div>
    </div> 
    <div class="total_price">
            총 금액 : <span>${comma(data.o_price)}원</span>
        </div>  
    `;
    $('.select_area').append(list)

    
    make_total_price()
    
}




function comma(num) {
    // console.log("num: " + Number(num).toLocaleString('ko-kr'))
    return  Number(num).toLocaleString('ko-kr');
}