// video 안에 있는 svg돌리기
let index_timer = 450;
let s1_des_o_t = $('#sec_des').offset().top;
let tmp_timer = 400;
let chk_h = true;
let chk_s = true;
let chk_l=true;
let chk_c = true;
let chk_kg = true;
let chk_iv = true;
let chk_iv_1 = true;
let chk_iv_op = true;
let chk_dv = true;
let chk_sb = true;

let tmp_x = $('.iv_container2_1').offset().top



    setInterval(function(){
        $('.s1_svg').animate({
            bottom:'40px',
            opacity:'1'
        }, index_timer).animate({
            bottom:'60px'
        }, index_timer).animate({
            bottom:'40px'
        },index_timer).animate({
            bottom:'60px',
            opacity:'0'
        },index_timer) 
    }, index_timer+3500);

// 비디오 안에 txt 보이게하기

    setInterval(function(){
        $('.o_0').addClass('o_0_active')
        // console.log("0099")
    },3500)

// app 박스 옆으로 이동
    $('.apple_m_box') .delay(3500).animate({
        left:'100%'
    },1500)
    $('.google_m_box') .delay(3500).animate({
        left:'-100%'
    },1500)


// svg누르면 다음 섹션으로 이동
    $('.s1_svg').click(function(){
        $('html,body').animate({
            scrollTop: $('#sec_des').offset().top
        },800);
    });


    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        // console.log(s_top)
        
        if(s_top >= 500){
            $('.sec_des').css({
                opacity:'1'
            })
        }

//홈,소비
        if(chk_h && s_top >= s1_des_o_t+200){
            $('.home_txt_1').addClass('up150_t1_active'); 
            setTimeout(function(){
                $('.home_img_2').addClass('up150_t1_active'); 
            }, tmp_timer*1)
            setTimeout(function(){
                $('.home_img_1').addClass('up150_t1_active'); 
            }, tmp_timer*2)
            setTimeout(function(){
                $('.home_txt_2').addClass('up150_t1_active'); 
            }, tmp_timer*3)
            chk_h=false
        }
        else if(!chk_h && s_top < s1_des_o_t+200){
            chk_h=true;
            $('.home_txt_1').removeClass('up150_t1_active');
            $('.home_txt_2').removeClass('up150_t1_active');
            $('.home_img_1').removeClass('up150_t1_active');
            $('.home_img_2').removeClass('up150_t1_active');
        }
//송금
        let send_o_t = $('.send').offset().top;  
        
        // console.log(chk_s, s_top , send_o_t-200)        
        // console.log(s_top , send_o_t)
        if(chk_s && s_top >= send_o_t-200){           
            $('.send_txt_1').addClass('up150_t1_active'); 
            setTimeout(function(){
                $('.send_item_txt0').addClass('up150_t1_active');
                $('.send_item_mbox0').animate({
                    left:'100%'
                },500);
            }, tmp_timer*1)
            setTimeout(function(){
                $('.send_item_txt1').addClass('up150_t1_active');
                $('.send_item_mbox1').animate({
                    left:'-100%'
                },500); 
            }, tmp_timer*2.5)
            setTimeout(function(){
                $('.send_item_txt2').addClass('up150_t1_active');
                $('.send_item_mbox2').animate({
                    left:'100%'
                },500); 
            }, tmp_timer*5)
            chk_s=false
        }
        // 안되는거요////////////////////////////////////////////////////////////////////
        else if(!chk_s && s_top < send_o_t-200){        
            chk_s=true;
            $('.send_txt_1').removeClass('up150_t1_active');
            $('.send_item_mbox0').stop().animate({
                left: '0'
            },0)
            $('.send_item_mbox1').stop().animate({
                left: '0'
            },0)
            $('.send_item_mbox2').stop().animate({
                left: '0'
            },0)
            $('.send_item_txt0').removeClass('up150_t1_active');
            $('.send_item_txt1').removeClass('up150_t1_active');
            $('.send_item_txt2').removeClass('up150_t1_active');
        }
//대출
        let loan_o_t = $('.loan').offset().top;
        
        // console.log(s_top , loan_o_t)
        if(chk_l && s_top >= loan_o_t-300){
            $('.loan_txt_1').addClass('up150_t1_active'); 
            setTimeout(function(){
                $('.loan_img_box').addClass('up150_t1_active'); 
            }, tmp_timer*1)
            setTimeout(function(){
                $('.loan_fin_txt').addClass('up150_t1_active'); 
            }, tmp_timer*1.5)
            setTimeout(function(){
                $('.high').addClass('up150_t1_active'); 
            }, tmp_timer*2)
            setTimeout(function(){
                $('.low').addClass('up150_t1_active'); 
            }, tmp_timer*2.5)
            setTimeout(function(){
                $('.small').addClass('up150_t1_active'); 
            }, tmp_timer*3)
            chk_l=false
        }
        else if(!chk_l && s_top < loan_o_t-300){
            chk_l=true;
            $('.loan_txt_1').removeClass('up150_t1_active');
            $('.loan_img_box').removeClass('up150_t1_active');
            $('.loan_fin_txt').removeClass('up150_t1_active');
            $('.high').removeClass('up150_t1_active');
            $('.low').removeClass('up150_t1_active');
            $('.small').removeClass('up150_t1_active');
        }
//신용
        
        let credit_o_t = $('.credit').offset().top;
        // console.log(s_top , credit_o_t);
        if(chk_c && s_top >= credit_o_t-300){
            $('.cd_txt_1').addClass('up150_t1_active'); 
            setTimeout(function(){
                $('.cd_item_0').addClass('up150_t1_active'); 
                $('.cd_item_1').addClass('up150_t1_active');
            }, tmp_timer*1)
            setTimeout(function(){
                $('.cd_item_2').addClass('up150_t1_active'); 
                $('.cd_item_3').addClass('up150_t1_active');
            }, tmp_timer*2)
            chk_c=false
        }
        else if(!chk_c && s_top < credit_o_t-300){
            chk_c=true;
            $('.cd_txt_1').removeClass('up150_t1_active');
            $('.cd_item_0').removeClass('up150_t1_active');
            $('.cd_item_1').removeClass('up150_t1_active');
            $('.cd_item_2').removeClass('up150_t1_active');
            $('.cd_item_3').removeClass('up150_t1_active');
        }
//투자   
        
        let investment_o_t = $('.investment').offset().top;
        // console.log(s_top , investment_o_t);
        if(chk_iv && s_top >= investment_o_t-500){
            $('.iv_txt_1').addClass('up150_t1_active'); 
            setTimeout(function(){
                $('.txt_L').addClass('up150_t1_active'); 
                $('.txt_R').addClass('up150_t1_active');
            }, tmp_timer*1)
            chk_iv=false
        }
        else if(!chk_iv && s_top < investment_o_t-300){
            chk_iv=true;
            $('.iv_txt_1').removeClass('up150_t1_active');
            $('.txt_L').removeClass('up150_t1_active');
            $('.txt_R').removeClass('up150_t1_active');
        }
        
        let tmp_y = s_top + 200;
        console.log(tmp_x, tmp_y, s_top);
        if(chk_iv_1 && tmp_y >= tmp_x){
            setTimeout(function(){
                $('.iv_container2_1').addClass('up150_t1_active'); 
            }, tmp_timer*3)
            chk_iv_1=false;
            console.log("11")
        }
        else if(!chk_iv_1 && tmp_y < tmp_x){
            chk_iv_1=true;
            $('.iv_container2_1').removeClass('up150_t1_active');
            console.log("22")
        }

// 오퍼시티
        let sm_o_t = $('.small_banner').offset().top;
        let sm_s_t = s_top+800;
        // let sm_s_t_2 = s_top+700;
        // let sm_s_t_3 = s_top+600;
        // console.log(s_top,sm_o_t,sm_s_t)
        if(chk_iv_op && sm_s_t >= sm_o_t){
            $('.sb_img2').addClass('img_active');
            $('.sb_img4').addClass('img_active');
            chk_iv_op=false;
        }
        else if(!chk_iv_op && sm_s_t < sm_o_t){
            chk_iv_op=true;
            $('.sb_img2').removeClass('img_active');
            $('.sb_img4').removeClass('img_active');
        }
        // console.log(chk_iv_op)
        if(sm_s_t-100 >= sm_o_t){
            $('.sb_img1').addClass('img_active');
            $('.sb_img5').addClass('img_active');
            
        }
        else if(sm_s_t-100 < sm_o_t){
            $('.sb_img1').removeClass('img_active');
            $('.sb_img5').removeClass('img_active');
        }
        if(sm_s_t-200 >= sm_o_t){
            $('.sb_img0').addClass('img_active');
            $('.sb_img6').addClass('img_active');
        }
        else if(sm_s_t-200 < sm_o_t){
            $('.sb_img0').removeClass('img_active');
            $('.sb_img6').removeClass('img_active');
        }
        


// 서브 베너
        
        let sb_o_t = $('.sub_banner').offset().top;
        let sb_s_top = $(window).scrollTop() + 800;
        // console.log(sb_o_t, sb_s_top)
        if(sb_s_top >= sb_o_t){
            let cal = (sb_s_top - sb_o_t)*0.6;
            $('.sub_wh_box_L').css({
                transform: `translateX(-${cal}px)`
            })
            $('.sub_wh_box_R').css({
                transform: `translateX(${cal}px)`
            })
        }
//알면 좋은 금융
        
        let  kg_o_t= $('.knowgood').offset().top; 
        // console.log(s_top , kg_o_t);
        if(chk_kg && s_top >= kg_o_t-400){
            $('.kg_txt_1').addClass('up150_t1_active'); 
            setTimeout(function(){
                $('.kg_svg_box0').addClass('up150_t1_active'); 
                $('.kg_svg_box1').addClass('up150_t1_active');
            }, tmp_timer*1)
            setTimeout(function(){
                $('.kg_item_txt0').addClass('up150_t1_active'); 
                $('.kg_item_txt1').addClass('up150_t1_active');
            }, tmp_timer*2)
            setTimeout(function(){
                $('.kg_svg_box2').addClass('up150_t1_active'); 
                $('.kg_svg_box3').addClass('up150_t1_active');
            }, tmp_timer*3)
            setTimeout(function(){
                $('.kg_item_txt2').addClass('up150_t1_active'); 
                $('.kg_item_txt3').addClass('up150_t1_active');
            }, tmp_timer*4)
            setTimeout(function(){
                $('.kg_svg_box4').addClass('up150_t1_active'); 
                $('.kg_svg_box5').addClass('up150_t1_active');
            }, tmp_timer*5)
            setTimeout(function(){
                $('.kg_item_txt4').addClass('up150_t1_active'); 
                $('.kg_item_txt5').addClass('up150_t1_active');
            }, tmp_timer*6)
            setTimeout(function(){
                $('.kg_svg_box6').addClass('up150_t1_active'); 
            }, tmp_timer*7)
            setTimeout(function(){
                $('.kg_item_txt6').addClass('up150_t1_active');
            }, tmp_timer*8)
            chk_kg=false
        }
        else if(!chk_kg && s_top < kg_o_t-400){
            // console.log("11")
            chk_kg=true;
            $('.kg_txt_1').removeClass('up150_t1_active');
            $('.kg_svg_box0').removeClass('up150_t1_active');
            $('.kg_svg_box1').removeClass('up150_t1_active'); 
            $('.kg_item_txt0').removeClass('up150_t1_active'); 
            $('.kg_item_txt1').removeClass('up150_t1_active'); 
            $('.kg_svg_box2').removeClass('up150_t1_active'); 
            $('.kg_svg_box3').removeClass('up150_t1_active'); 
            $('.kg_item_txt2').removeClass('up150_t1_active'); 
            $('.kg_item_txt3').removeClass('up150_t1_active'); 
            $('.kg_svg_box4').removeClass('up150_t1_active'); 
            $('.kg_svg_box5').removeClass('up150_t1_active'); 
            $('.kg_item_txt4').removeClass('up150_t1_active'); 
            $('.kg_item_txt5').removeClass('up150_t1_active'); 
            $('.kg_svg_box6').removeClass('up150_t1_active'); 
            $('.kg_item_txt6').removeClass('up150_t1_active');  
        }

//디바이스
        let dv_o_t= $('.device').offset().top;
        // console.log(s_top, dv_o_t)
        if(chk_dv && s_top >= dv_o_t-400){
            setTimeout(function(){
                $('.dv_img').addClass('up150_t1_active')
            }, tmp_timer*1.5)
        }
        if(chk_dv && s_top >= dv_o_t+200){
            setTimeout(function(){
                $('.dv_title').addClass('o_0_dv_active')
            }, tmp_timer*1)
            setTimeout(function(){
                $('.dv_txt').addClass('up150_t1_active')
            }, tmp_timer*1.8)
            
        }
        

});


