$(document).ready(function(){



/////////////////////////////////////////////////////////////////
///////////////////////햄버거//////////////////////////
    let ham_chk= true;
    let ham_timer=0.3;
    $('.hamberger_line').css({transition:`all ${ham_timer}s`})
    $('.hamberger').click(function(){

        ham_chk = !ham_chk;
        $('.hamberger_pan').toggleClass('hamberger_pan_active');
    })


    /////////////햄버거 닫기///////////////

    $('.hamberger_close').click(function(){
        ham_chk = false;
        ham_chk = !ham_chk;
        $('.hamberger_pan').toggleClass('hamberger_pan_active');
    })

    ////////////////////////햄버거 메뉴 //////////////////
    let updown_chk=true;
    $('.dress_shoes').click(function(){
        if(updown_chk){
            updown_chk =false;
            $('.gnb_active').animate({
                height:200
            },500)
            $('.updown').css({
                transform:"translateY(-50%) rotate(0deg)"
            },500)
        }
        else{
            updown_chk =true;
            $('.gnb_active').animate({
                height:20
            },500)
            $('.updown').css({
                transform: "translateY(-50%) rotate(180deg)"
            },500)
        }
    })


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


    let cate_no=get_location("cate")
    let item_no =get_location("item_no")

    const data_no=ITEM_LIST[cate_no][item_no - 1];

    let detail_list = `
                <div class="item_big">
                <img src="img/items/detail/${item_name[cate_no]}/${data_no.src}" alt="">
            </div>
            <div class="item_info">
                <div class="item_info_box">
                    <div class="item_main">
                        <div class="item_w item_name">${data_no.title}</div>
                        <div class="item_L">
                            <div class="o_price_size o_price_name">소비자가</div>
                            <div class="s_price_size s_price_name">APP 구매가</div>
                            <div class="delivery_f_si delivery_fee_name">사이즈</div>
                            <div class="s_money_size s_money_name">적립금</div>
                        </div>
                        <div class="item_R">
                            <div class="o_price_size o_price_num">${data_no.o_price.toLocaleString()}원</div>
                            <div class="s_price_size s_price_num">${(data_no.o_price - 1000).toLocaleString()}원</div>
                            <div class="delivery_f_si delivery_fee_p">
                                <select class="delivery_fee_select">
                                    <option value="선택">옵션 선택</option>
                                    <option value="260">260</option>
                                    <option value="255">255</option>
                                    <option value="250">250</option>
                                    <option value="245">245</option>
                                    <option value="240">240</option>
                                    <option value="235">235</option>
                                    <option value="230">230</option>
                                </select>
                                <span>2500원 (50,000원 이상 구매시 무료)</span>
                            </div>
                            <div class="s_money_size s_money_price">${(data_no.o_price * 0.01).toLocaleString()}원(1%)</div>
                        </div>
                    </div>
                    <div class="item_clac">
                        <div class="item_color">
                            <div class="item_color_name">색상</div>
                            <div class="item_colors">
                                <div class="${item_name[cate_no]}_pick_color">
                                        
                                </div>
                                <div class="nessesary">[필수]옵션을 선택해주세요</div>
                            </div>
                        </div>
                    </div>
                    <div class="opt_deal">

                    </div>
                    <div class="item_to_price">
                        <div class="item_price_outer">
                            <div class="item_price">
                                <span class="it_total">TOTAL:</span>
                                <span class="total_p">0원</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item_btn">
                    <div class="item_buy">BUY IT NOW</div>
                    <div class="item_btn_common item_cart">ADD TO CART</div>
                    <div class="item_btn_common item_list">WISH LIST</div>
                </div>
            </div>
    `

    $('.item_sec').append(detail_list)

    mobile_load_data(cate_no ,15 ,(item_no -1))

    //////////////////////////////////////////////////////////////////////
    ///////////////////////////////본문 높이 구하기//////////////////////////


    let scroll_t=$(window).scrollTop();

    $('.move_btn li a').click(function(){
        event.preventDefault();

        let pro_body_index=$(this)
    
        let move_body_p=$(this).attr('href')
   
        $('body , html').animate({
            scrollTop: $(move_body_p).offset().top 
        },0)
    })

    /////////////////////계싼 하기//////////////////////////////////////


    btn_chk =[true ,true , true]
    let color_pallete=['#fcbeb3','#000000','#ffffff','#77451c','#f83422','#fff1dc','#251709'];
    $(document).on('click','.pro_color',function(){

        if($('.delivery_fee_select').val() > 0 ) {
            let real_color=""
            let color_chk=$(this).attr('style')
            color_chk =color_chk.split(":")[1];


            if(color_chk == "#fcbeb3"){
                real_color="Pink"
            }
            else if(color_chk == "#000000"){
                real_color="Black"
            }
            else if(color_chk == "#ffffff"){
                real_color="White"
            }
            else if(color_chk == "#77451c"){
                real_color="Brown"
            }
            else if(color_chk == "#f83422"){
                real_color="Red"
            }
            else if(color_chk == "#fff1dc"){
                real_color="Ivory"
            }
            else if(color_chk == "#251709"){
                real_color="Darkbrown"
            }

            if(btn_chk[$(this).index()] == true){
            btn_chk[$(this).index()] = false;
            let opt_list=
            `
            <div class="item_total">
                <div class="item_detail">
                    <div class="item_detail_name">
                        <p>마켓디자인</p>
                        <p>- ${real_color}</p>
                    </div>
                    <div class="item_detail_price">
                        <div class="item_detail_count">
                            <div class="s_box minus">-</div>
                            <input type="text" class="count s_box" value="1" readonly disable>
                            <div class="s_box plus">+</div>
                            <input type="text" class="from_opt_index" value="${$(this).index()}">
                        </div>
                    </div>
                    <div class="item_chk_price">
                        <div class="item_close">
                            <img src="img/index03/btn_price_delete.gif" alt="">
                        </div>
                        <div class="chk_price">${data_no.o_price.toLocaleString()}원</div>
                    </div>
                </div>
            </div>
            `


                $('.opt_deal').append(opt_list);

                total_price();
            }

            else{
                alert("이미 선택한 상품 입니다")
            }
        }
        else {
            alert("사이즈를 선택하세요")
        }
    })

    $(document).on('click','.item_close',function(){
        let opt_no =$(this).parents('.item_chk_price').prev('.item_detail_price').find('.from_opt_index').val();
        btn_chk[opt_no] =true;
        $(this).parents('.item_total').remove();
        total_price()
    })

    $(document).on('click','.plus',function(){
        let item_count = Number($(this).prev('.count').val()) + 1;
        $(this).prev('.count').val(item_count)
        
        total_price()
    })

    $(document).on('click','.minus',function(){
        let item_count = Number($(this).next('.count').val()) - 1;
        
        if($(this).next('.count').val() > 1){
            $(this).next('.count').val(item_count)

            total_price()
        }
        else{
            alert("최소 주문 수량은 1개입니다.")
        }

        
        
    })

    function total_price(){
        let total_price=0;
        for(let i=0; i < $('.opt_deal .item_total').length; i++){
            total_price += $('.item_total').eq(i).find('.count').val() *data_no.o_price

        }

        $('.total_p').text(total_price.toLocaleString()+"원")
    }
})