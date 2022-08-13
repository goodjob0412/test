// $(document).ready(function(){
$(window).on('load', function(){

    
    // ////////////////////////////////////////////

    function btn_prevent(btn,time){
    
        $(btn).css({pointerEvents:'none'})
            setTimeout(()=>{
                $(btn).css({pointerEvents:'auto'})
            },time)
    
    }
    




///////////////////////////////////////////////////////////
/////////////////////////헤더 /////////////////////////////

    $(window).scroll(function(){
        let scroll =$(window).scrollTop(); 
        if(scroll > 1){
            $('.header').css({
                background:"white"
            })
            $('.middle_gnb').css({
                opacity:"1"
            })
        }
        else{
            $('.header').css({
                background:"transparent"
            })
            $('.middle_gnb').css({
                opacity:"0"
            })
        }
        
    })

    /////////////////햄버거/////////////////////////////////////
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

    /////////////////////////햄버거 메뉴 //////////////////
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


/////////////////////////////메인////////////////////////////////
//////////////////////////////////////////////////////////////////
        
    let main_b_len=$('.banner').length;
    let mb_count=1;
    let mb_time=1000;

    $('.banner').eq(0).css({left:0});

    $('.mb_directionR').click(function(){
        clearInterval(interval)
        slide(mb_count %main_b_len,"100%",(mb_count - 1) %main_b_len,"-100%")
        mb_count+=1;
    })
    $('.mb_directionL').click(function(){
        clearInterval(interval)
        mb_count-=1;
        slide((mb_count - 1) %main_b_len,"-100%",mb_count %main_b_len,"100%")
    })


    function slide(c_index,c_pos,left_index,l_pos){
        $('.mb_direction').css({pointerEvents:'none'})
        setTimeout(()=>{
            $('.mb_direction').css({pointerEvents:'auto'})
        },1000)

        
        $('.banner').eq(c_index).css({
            left:c_pos
        }).animate({
            left:0
        },mb_time)

        $('.banner').eq(left_index).animate({
            left:l_pos
        },mb_time)

        
    }


    ////////////////////////자동슬라이드///////////////

    let interval;

    function auto_slide(){
        interval =setInterval(() => {
            slide(mb_count %main_b_len,"100%",(mb_count - 1) %main_b_len,"-100%")
            mb_count+=1;
        }, 3000);
    }

    
    auto_slide();


/////////////////////////////이벤트//////////////////////////////
///////////////////////////////////////////////////////////////////


    //let time_li=$('.time_ul li')
    let event_length=$('.event').length;
    let event_hei=$('.event').height();
    let event_count=0;
    let black_layer=$('.event_blacklayer').length;
    let black_count=1;


    for(let i=0; i <event_length; i++){
        $('.event').eq(i).css({top:event_hei* i})
    }

        $(window).resize(function(){
            event_count =0;
            event_hei=$('.event').height();
            for(let i=0; i <event_length; i++){
                $('.event').eq(i).css({top:event_hei* i})
            }
        })
 

    $('.event_blacklayer').eq(1).css({opacity:0})

    $('.ev_clickU').click(function(){

        btn_prevent('.ev_clickU',700);

        $('.event').animate({
                top:"-="+ event_hei
            },700,)
           
        $('.event').eq(event_count  %event_length).animate({
                top:event_hei  * (event_length - 1)
            },0)
        
                
        event_count +=1;

        $('.event_blacklayer').eq(black_count%black_layer).animate({
            opacity:1
        },700)
        $('.event_blacklayer').eq((black_count+1)%black_layer).animate({
            opacity:0
        },700)

        black_count +=1;
    })


    $('.ev_clickD').click(function(){

        btn_prevent('.ev_clickD',700);
        event_count -=1;
        
        $('.event').eq(event_count  %event_length).animate({
                top:-event_hei
            },0)
        $('.event').animate({
                top:"+="+ event_hei
            },700,)
            
        black_count -=1;      
        $('.event_blacklayer').eq(black_count%black_layer).animate({
                opacity:0
        },700)
        $('.event_blacklayer').eq((black_count+1)%black_layer).animate({
            opacity:1
        },700)
    
                
    })

////////////////////////////////////////////////////////////
//////////////////////베스트//////////////////////////////

    ///////카테///////////////////////
    $('.best_cate_li').eq(0).children('.common_circle').addClass('common_circle_active')

    $('.best_cate_li').click(function(){
        $('.common_circle').removeClass('common_circle_active')
        $(this).children('.common_circle').addClass('common_circle_active')
    })



        
    $('.loafer_cate').click(function(){
        
        $('.boots_sec').animate({
            left:"100%"
        },700)
        $('.loafer_sec').animate({
            left:0
        },700)
        
        $('.best_btn').attr('href','mobile_index2.html?cate=0')
        
    })
    
    
    $('.boots_cate').click(function(){

        $('.loafer_sec').animate({
            left:"-100%"
        },700)
        $('.boots_sec').animate({
            left:0
        },700)

        $('.best_btn').attr('href','mobile_index2.html?cate=1')
    })


        mobile_load_data(0,12," ")
        mobile_load_data(1,12," ")



    //////////////베스트 높이 설정 //////////////////

   
    let best_sec_hight=$('.best_item').height() ;
    
    $(window).resize(function(){
        best_sec_hight=$('.best_item').height();
        
        
    })

////////////////////////////스타일북///////////////////////
/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////


    //////스크롤 /////////////////////////
    let img = $('.recomend_imgcase')
    let img_size =$('.recomend_imgcase').width();
    for(let i =0; i < img_size ; i++){
       img.eq(i).css({
           left : img_size * i 
       })
    }
    


    let img_hidden = $('.recomend_img_hidden');
    let img_hidden_size = img_size * img.length;
    $('.recomend_img_hidden').css({
       width :  img_hidden_size
    })

    let mouse_chk = false;
    let start_pos = 0;
    let end_pos = 0;
    let curr_pos = img_hidden.offset().left;
    let recomend_pos = $('.recomend_img_area').outerWidth();

    img_hidden.bind('touchstart',function(el){
     

    })
    $(window).bind('touchend',function(){
        
    })

    img_hidden.bind('touchmove',function(el){
        let pos_page_x = event.touches[0].pageX;
        let pos_page_y = event.touches[0].pageY;

    }) 
          

    /////////스크롤 올라오기 ///////////////////////////

    let recomend_offt=$('.recomend_sec').offset().top;
    $(window).scroll(function(){
        let scroll_t =$(window).scrollTop();

        
        if(recomend_offt <scroll_t + 500){
            $('.recomend_des').animate({
                top:30,
                opacity:1
            },400)

            $('.recomend_img_area').css({
                transform:"translateX(0)",
                opacity:1
   
            })
        }
    })

///////////////////////타임특가/////////////////////////
//////////////////////////////////////////////////

    
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

    //////////특가 슬라이드////////////////////////////

    let time_ul_length=$('.time_ul').length;
    let time_ul_hei=$('.time_ul').height();
    let time_count=0;

    for(let i=0; i <time_ul_length; i++){
        $('.time_ul').eq(i).css({top:time_ul_hei* i})
    }


    $('.sp_clickU').click(function(){

        btn_prevent('.sp_clickU',1000);

        $('.time_ul').animate({
                top:"-="+ time_ul_hei
            },700,)
        $('.time_ul').eq(time_count  %time_ul_length).animate({
                top:time_ul_hei  * (time_ul_length - 1)
            },0)
        
                
        time_count +=1;
    })


    $('.sp_clickD').click(function(){

        btn_prevent('.sp_clickD',1000);
        time_count -=1;
        
        $('.time_ul').eq(time_count  %event_length).animate({
                top:-time_ul_hei
            },0)
        $('.time_ul').animate({
                top:"+="+ time_ul_hei
            },700,)
        
                
    })

/////////////////////////////////////////////////////////////////
/////////////////////md 픽////////////////////////////////////
    let md_len =$('.md_ul li').length;
    let md_wid=$('.md_ul li').width() + 20 ;
    let md_count=0;

     for(let i=0; i <md_len; i++){
         $('.md_ul li').eq(i).css({left:md_wid* i})

     }

    $(window).resize(function(){
        md_count =0;
        md_slide();
        md_ul_wid =$('.md_ul').width();
    })
    
    md_slide();
    btn_prevent('.md_R' ,700);

    let bang = 0;
    $('.md_R').click(function(){

        btn_prevent('.md_R' ,700);
    
        $('.md_ul li').animate({
            left:"-=" + md_wid
        })
        $('.md_ul li').eq(md_count%md_len).animate({
            left: md_wid * (md_len - 1)
        },0)

        md_count +=1;

    })

    $('.md_L').click(function(){
            btn_prevent('.md_L' ,1000);
            md_count -=1;
            $('.md_ul li').eq(md_count%md_len).animate({
                left: -1*(md_wid)
            },0)

            $('.md_ul li').animate({
                left:"+=" + md_wid
            })


        })

    


    function md_slide(){
        md_wid=$('.md_ul li').width() + 20 ;
        
        
        for(let i=0; i <md_len; i++){
            $('.md_ul li').eq(i).css({left:md_wid* i})
            
        }
        
       
    }

  
})