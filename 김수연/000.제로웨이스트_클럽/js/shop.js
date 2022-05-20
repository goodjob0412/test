let cate_no = get_url_info("cate_no");

// console.log(ITEM_LIST[cate_no])


$('.shop_menu_li').removeClass('shop_menu_li_click')
$('.shop_menu_li').eq(cate_no==999?0:Number(cate_no)+1).addClass('shop_menu_li_click')

if(cate_no < 999) {

    for(let i=0; i<ITEM_LIST[cate_no].length; i++) {
        let list = `<div class="item_box">
                    <a href="deal_0510.html?cate_no=${cate_no}&item_no=${i}">
                        <div class="react_icon_box">
                            <span class="react_icon i_like"></span>
                            <span class="reac_qty">23</span>
                            <span class="react_icon i_reply"></span>
                            <span class="reac_qty">15</span>
                            <span class="react_icon i_cart"></span>
                            <span class="reac_qty">16</span>
                        </div>
                        <div class="img_box">
                            <img src="img/shop_page/${MENU_TITLE[cate_no]}/${ITEM_LIST[cate_no][i].src}" alt="메모패드">
                        </div>
                        <div class="color_otp_box">
                            <div class="color_opt"></div>
                        </div>
                        <div class="item_name">${MENU_TITLE[cate_no]}/${ITEM_LIST[cate_no][i].title}</div>
                        <div class="item_price">${comma(ITEM_LIST[cate_no][i].o_price[0])}원</div>
                        <div class="i_inform_box">`;
                if(ITEM_LIST[cate_no][i].info[0])
                    list+=` <div class="inform_icon i_best">BEST</div>`
                if(ITEM_LIST[cate_no][i].info[1])
                    list+=`<div class="inform_icon i_new">NEW</div>`
                if(ITEM_LIST[cate_no][i].info[2])
                    list+=`<div class="inform_icon i_sale">SALE</div> `
                        

                list+=` </div>
                    </a>
                </div>`;

        $('.item_area').append(list);

        // let tmptmp = [`<div class="inform_icon i_best">BEST</div>`,
        //             `<div class="inform_icon i_new">NEW</div>`,
        //             `<div class="inform_icon i_sale">SALE</div>`];
        // for(let j=0; j<ITEM_LIST[cate_no][i].info.length; j++) {
        //     if(ITEM_LIST[cate_no][i].info[j] == true) {
        //         $('.i_inform_box').eq(i).append(tmptmp[j]);
        //     }

        // }

    }


    {/* <div class="inform_icon i_best">BEST</div>
    <div class="inform_icon i_new">NEW</div>
    <div class="inform_icon i_sale">SALE</div> */}
}
else {
    for(let i=0; i<ITEM_LIST.length; i++) {
        for(let j=0; j<4; j++) {
// console.log(ITEM_LIST[i][j])
            let list = `<div class="item_box">
                    <a href="./deal_0510.html?cate_no=${i}&item_no=${j}">
                        <div class="react_icon_box">
                            <span class="react_icon i_like"></span>
                            <span class="reac_qty">23</span>
                            <span class="react_icon i_reply"></span>
                            <span class="reac_qty">15</span>
                            <span class="react_icon i_cart"></span>
                            <span class="reac_qty">16</span>
                        </div>
                        <div class="img_box">
                            <img src="img/shop_page/${MENU_TITLE[i]}/${ITEM_LIST[i][j].src}" alt="${ITEM_LIST[i][j].title}">
                        </div>
                        <div class="color_otp_box">
                            <div class="color_opt"></div>
                        </div>
                        <div class="item_name">${ITEM_LIST[i][j].title}</div>
                        <div class="item_price">${comma(ITEM_LIST[i][j].o_price[0])}원</div>
                        <div class="i_inform_box">`;

                        // if(ITEM_LIST[i][j].info.length > 0) {
console.log(ITEM_LIST[i][j].info[0])
                        if(ITEM_LIST[i][j].info[0])
                            list+=` <div class="inform_icon i_best">BEST</div>`
                        if(ITEM_LIST[i][j].info[1])
                            list+=`<div class="inform_icon i_new">NEW</div>`
                        if(ITEM_LIST[i][j].info[2])
                            list+=`<div class="inform_icon i_sale">SALE</div> `
                        // }            

                list+=` </div>
                    </a>
                </div>`;
console.log(list)
            $('.item_area').append(list);
        }   
    }
    console.log()
}
function comma(num) {
    return Number(num).toLocaleString('ko-kr');
}