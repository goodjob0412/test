$(document).ready(function(){

    if(navigator.maxTouchPoints > 1) {
        location.replace('mobile_index1.html')
    }

////////////////////////////////////////////////
////////////공통///////////////////////////////

function btn_prevent(btn,time){
    
    $(btn).css({pointerEvents:'none'})
        setTimeout(()=>{
            $(btn).css({pointerEvents:'auto'})
        },time)

}


//////////////////////////////////////////////////////

let top_length=$('.top_des').length;
let top_count=1;
let top_banner_time=1500;
$('.top_des').eq(0).css({top:0});

setInterval(()=>{
    $('.top_des').eq(top_count %top_length).css({
        top:"100%"
    }).animate({
        top:0
    },top_banner_time)

    $('.top_des').eq((top_count - 1) %top_length).animate({
        top:"-100%"
    },top_banner_time)

    top_count+=1;
},top_banner_time*2)


///////////////top 배너끝///////////////////////

///////////////헤더///////////////////////

    let down_h_offs=$('.down_header').offset().top - 30;
    $(window).scroll(function(){
        let scr_top=$(window).scrollTop();

        if(down_h_offs <scr_top){
            $('.down_header').removeClass('help_po')
            $('.down_header').addClass('header_active')
            $('.main').addClass('main_margin')
        }

        else{
            $('.down_header').removeClass('header_active')
            $('.main').removeClass('main_margin')
        }
    })
    ////////말풍선 움직이기///

    let join_timer=500;
    setInterval(()=>{
        $('.icon_join').animate({
            top:"100%"
        },500).animate({
            top:"130%"
        },500)
    },join_timer*2)

    // ///////////헤더 내리기 /////////////////////////


    $('.gnb_click , .gnb').hover(function(){
        $('.gnb').addClass('gnb_active').css({
            boxShadow:"0 1px 1px 0 rgb(199, 199, 199)" 
        })
    },function(){
        $('.gnb').removeClass('gnb_active').css({
            boxShadow:"0 5px 5px 0 transparent" 
        })

    })


    ////////////////////해더 줄 긋///////////////////

    let navi=-1;
    $('.navi li , .gnb').hover(function(){ 
        $(this).find('.navi_line').animate({
            width:"100%"
        },100)
     },function(){
        
        $(this).find('.navi_line').animate({
            width:0
        },100)
     })
    



    ////////메인베너//////////////////////////////

    let main_b_len=$('.banner').length;
    let mb_count=1;
    let mb_time=1000;

    $('.directionR').click(function(){
        clearInterval(interval)
        slide(mb_count %main_b_len,"100%",(mb_count - 1) %main_b_len,"-100%")
        mb_count+=1;
    })
    $('.directionL').click(function(){
        clearInterval(interval)
        mb_count-=1;
        slide((mb_count - 1) %main_b_len,"-100%",mb_count %main_b_len,"100%")
    })


    function slide(c_index,c_pos,left_index,l_pos){
        $('.direction, .indi').css({pointerEvents:'none'})
        setTimeout(()=>{
            $('.direction ,.indi').css({pointerEvents:'auto'})
        },1000)

        $('.indi').removeClass('indi_active')
        $('.indi').eq(c_index).addClass('indi_active')
        
        $('.banner').eq(c_index).css({
            left:c_pos
        }).animate({
            left:0
        },mb_time)

        $('.banner').eq(left_index).animate({
            left:l_pos
        },mb_time)

        
    }

    ///////////인디/////////////////

    for(let i=0; i<3; i++){
        let indi=`<div class="indi"></div>`
        $('.indi_outer').append(indi)
    }

   $('.indi').eq(0).addClass('indi_active')

    $('.indi').click(function(){
        let indi_index=$(this).index();

        console.log($('.indi_active').index())
        console.log(indi_index)
        let gap = $('.indi_active').index() - indi_index ;
        console.log(gap)
        
        $('.indi').removeClass('indi_active')
        $(this).addClass('indi_active')
        
        
                if((mb_count - 1) %main_b_len <indi_index){
                    slide(indi_index,"100%",(mb_count - 1) %main_b_len,"-100%")
                    //mb_count =indi_index +1;
                }
                else if((mb_count - 1) %main_b_len > indi_index){
                    //mb_count =indi_index -1;
                    slide(indi_index,"-100%",(mb_count - 1)  %main_b_len,"100%")
                }
                mb_count =indi_index +1;
                

    })


    ////auto슬라이드/////////////////////////////

    let interval;

    function auto_slide(){
        interval =setInterval(() => {
            slide(mb_count %main_b_len,"100%",(mb_count - 1) %main_b_len,"-100%")
            mb_count+=1;
        }, 3000);
    }

    /////////////메인베너 호버///////////////////////

    $('.mainbanner').hover(function(){
        clearInterval(interval)
    },function(){
        auto_slide();
    })

    
    auto_slide();

    ////////////////////이벤트 구간///////////////////////////////

    $('.event_big').hover(function(){
        $('.event_big .black_layer').animate({opacity:1},300)
        $('.event_line1').animate({opacity:1,top:180},300)
        $('.event_title').animate({top:80},300)
        $('.event_des').animate({opacity:1,top:190},300)
    },function(){
        $('.event_big .black_layer').animate({opacity:0},300)
        $('.event_line1').animate({opacity:0,top:"50%"},300)
        $('.event_title').animate({top:130},300)
        $('.event_des').animate({opacity:0,top:300},300)
    })

    //두번째
    $('.event_plus').hover(function(){
        $('.event_plus .black_layer').animate({opacity:1},300)
        $('.event_line2').animate({opacity:1,top:80},300)
        $('.event_plus_mention').animate({top:30},300)
        //$('.event_des').animate({opacity:1,top:190},300)
    },function(){
        $('.event_plus .black_layer').animate({opacity:0},300)
        $('.event_line2').animate({opacity:0,top:130},300)
        $('.event_plus_mention').animate({top:60},300)
        //$('.event_des').animate({opacity:0,top:300},300)
    })

    //세번째
    $('.event_deli').hover(function(){
        $('.event_line3').animate({opacity:1,bottom:80},300)
        $('.event_car').animate({ top: "23%"},300)
        $('.today_delivery').animate({ bottom: 75},300)
        $('.today_delivery_mention').animate({opacity:1,bottom:40},300)
        //$('.event_des').animate({opacity:1,top:190},300)
    },function(){
        $('.event_line3').animate({opacity:0,bottom:60},300)
        $('.event_car').animate({ top: "27%"},300)
        $('.today_delivery').animate({ bottom: 60},300)
        $('.today_delivery_mention').animate({opacity:0,bottom:20},300)
        //$('.event_des').animate({opacity:0,top:300},300)
    })

    //-----------네번째
    $('.event_brand').hover(function(){
        $('.event_brand .black_layer').animate({opacity:1},300)
        $('.event_line4').animate({opacity:1,top:80},300)
        $('.event_b_des1').animate({top:50},300)
        //$('.event_des').animate({opacity:1,top:190},300)
    },function(){
        $('.event_brand .black_layer').animate({opacity:0},300)
        $('.event_line4').animate({opacity:0,top:130},300)
        $('.event_b_des1').animate({top:70},300)
        //$('.event_des').animate({opacity:0,top:300},300)
    })


    // ---------베스트---------------------


    //  카테고리//
    $('.best_cate_li').eq(0).children('.common_circle').addClass('common_circle_active')

    $('.best_cate_li').click(function(){
        //console.log('클릭')
        $('.common_circle').removeClass('common_circle_active')
        $(this).children('.common_circle').addClass('common_circle_active')
    })

    // /버튼
    $('.event_btn_more').hover(function(){
        $('.event_btn_hover').stop().animate({
            left:0
        },300)

        setTimeout(function(){
            $('.event_btn_more span').css({
                color:'white'
            })
        },200)
    
    },function(){
        $('.event_btn_hover').stop().animate({
            left:"-100%"
        },300)

        setTimeout(function(){
            $('.event_btn_more span').css({
                color:'rgb(156, 156, 156)'
            })
        },200)
    })

////////// / // 데이터/////////////

    
    setTimeout(()=>{
        load_data(0,15," ");
        load_data(1,15," ");
    },200)

    //아이템/////////////


        setTimeout(() => {
            item_show('.loafer_pro_img','.loafer_pro_img_s')
            item_show('.boots_pro_img','.boots_pro_img_s')
        
        }, 300);

        function item_show(img,second_img){
            
            $(img).hover(function(){
                $(this).find(second_img).css({
                    opacity:'1',
                   
                })
            },function(){
                $(img).find(second_img).css({
                    opacity:'0'
                })
            })
        }
     

    ////////////카테고리 슬라이드///////////
        /////더보기 링크 바꾸기
    $('.loafer_cate').click(function(){

        $('.boots_sec').animate({
            left:"100%"
        },700)
        $('.loafer_sec').animate({
            left:0
        },700)

        $('.best_btn').attr('href','index2.html?cate=0')
        
    })

    $('.boots_cate').click(function(){
        $('.loafer_sec').animate({
            left:"-100%"
        },700)
        $('.boots_sec').animate({
            left:0
        },700)

        $('.best_btn').attr('href','index2.html?cate=1')
    })

       



//////////////////////////////////////////////////
//==========세일 ==================================
/////////////////////////////////////////////////

    let li_len=$('.sale_ul li').length;
    let li=$('.sale_ul li');
    let li_width=$('.sale_ul li').width();
    let li_count=0;
    let sale_interval;
    let left_container =0;

    li.eq(0).css({left:0})

    setTimeout(()=>{
        for(let i=1; i <li_len; i++){
            left_container= left_container +(li_width + 10),
            li.eq(i).css({
                left:left_container
            })
           
        }
    },200)

   




    sale_interval=setInterval(()=>{
        li.animate({
            left:"-="+ (li_width +10)
        },1000,"linear")
        li.eq(li_count  %li_len).animate({
            left:(li_width +10)  * (li_len - 1)
        },0)
    
            
        li_count +=1;
       
    
    },1000)


    
    ///////////////오른쪽 ///////////////

    function right_sale(r_time) {
console.log("시간:"+r_time)        
        li.animate({
            left:"-="+ (li_width +10)
        },r_time,"linear")
        li.eq(li_count  %li_len).animate({
            left:(li_width +10)  * (li_len - 1)
                    //left:"100%"
        },0)
        li_count +=1;
    }

    //////////////////////////////////////

    $('.sale_R').hover(function(){  
        clearInterval(sale_interval)
        right_sale(500)
 
        sale_interval=setInterval(()=>{
            right_sale(500)
        },500)
        
        
      
    },function(){
            clearInterval(sale_interval)

            
            right_sale(1000)

            sale_interval=setInterval(()=>{
                right_sale(1000)

            },1000)

    })

    ////////왼쪽///////////////////////////

    function left_sale(l_time){
        li_count -=1;
            li.eq(li_count  %li_len).animate({
                left: - 1 *(li_width +10)
            },0)
            li.animate({
                left:"+="+ (li_width +10)
            },l_time,"linear")
    }

    $('.sale_L').hover(function(){

        clearInterval(sale_interval)

            left_sale(500)
         sale_interval=setInterval(()=>{
            left_sale(500)
        },500)

    },function(){
        clearInterval(sale_interval)
            right_sale(1000)
        sale_interval=setInterval(()=>{
         
            right_sale(1000)
            
        },1000)

    })





//////////////////////////////////////////////////////////////
/////////////////////////추천///////////////////////////////

    let recomend_offt=$('.recomend_sec').offset().top;

    $(window).scroll(function(){
        let scroll_t =$(window).scrollTop();

        
        if(recomend_offt <scroll_t + 500){
            console.log("닿았다")
            $('.recomend_des').animate({
                top:30,
                opacity:1
            },800)

        for(let i=0; i<$('.recomendimg').length; i++){
            setTimeout(() => {
                $('.recomendimg').eq(i).addClass('recomendimg_active')    
            }, 100 * i);
        }
            
        }
    })


/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//특가세일//////////////////////////////////////
/////////////////////////////////////////////////

    make_timer()

    setInterval(()=>{
        make_timer()
    },1000)

    function make_timer(){

        let dt_end =new Date(2021,11,10);
        let dt_curr=new Date();

        let diff_time =(dt_end.getTime() - dt_curr.getTime())

        let diff_sec = diff_time /1000;

        $('.sec').text(zero(Math.floor(diff_sec)% 60))

        let diff_min =diff_time/1000/60;

        $('.min').text(zero(Math.floor(diff_min)%1000% 60))

        let diff_hour = diff_time /1000/60/60;

        $('.hour').text(zero(Math.floor(diff_hour)%60))

        let diff_date = diff_time /1000/60/60/24;

        $('.date').text(zero(Math.floor(diff_date)%24))
    }

    function zero(num){
        return num>=10?num:"0"+num;
    }

    
    /////////특가슬라이드////////////////////////

    let time_li=$('.time_ul li')
    let time_index=time_li.length;
    let time_li_wid=time_li.width();
    let time_li_count=0;


    for(let i=0; i <time_li.length; i++){
        time_li.eq(i).css({left:(time_li_wid + 20)* i})
        //console.log()
    }


    $('.special_price_R').click(function(){

        btn_prevent('.special_price_R',700);

           time_li.animate({
                left:"-="+ (time_li_wid +20)
            },700,)
           time_li.eq(time_li_count  %time_index).animate({
                left:(time_li_wid + 20)  * (time_index - 1)
    
            },0)
        
                
           time_li_count +=1;

    })
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
////////////////md 픽///////////////////////////////
        let md_li=$('.md_ul li')
        let md_index=md_li.length;
        let md_wid=md_li.width();
        let md_count=0;
        let md_time=250;


        setTimeout(() => {
            for(let i=0; i <md_index; i++){
                md_li.eq(i).css({left:(md_wid + 20)* i})
            }
        }, 200);




        $('.md_R').click(function(){

            /////////////////////
            // 또르륵 애니메이션

            
            console.log("또르르");
            
            md_li.removeClass('ddorrk'); 

            let ddo_count = 0
            for(let i=md_count; i< (md_count+9); i++) {
                setTimeout(() => {
                    md_li.eq(i  % md_index).addClass('ddorrk')
                }, 100 * ddo_count++);
            }

            /////////////////////

            console.log("클릭")
            btn_prevent('.md_R',500);

                md_li.animate({
                    left:"-="+ (md_wid +20)
                },md_time,"linear")
                md_li.eq(md_count  %md_index).animate({
                    left:(md_wid + 20)  * (md_index - 1 ),
                    top:"50%"
                },0)
            
               md_count +=1;

        })


        $('.md_L').click(function(){


            md_li.removeClass('ddorrk')
            let ddo_count = 0
      
            for(let i=md_count + 8 ;i >= md_count; i--){
                setTimeout(()=>{
console.log((i-1) , md_index, ddo_count)
                    md_li.eq((i-1) % md_index).addClass('ddorrk')
                },100 * ddo_count++)
            }

            console.log("클릭")
            btn_prevent('.md_L',500);


                md_count -=1;
                md_li.eq(md_count  %md_index).animate({
                    left:-1*(md_wid + 20)
                },0)
                md_li.animate({
                    left:"+="+ (md_wid +20),
                    top:"50%"
                },md_time,"linear")
   
        })




//////////////////////////////////////////////////////////
/////////////////////////데이터////////////////////////

   


})