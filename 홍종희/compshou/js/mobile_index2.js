// $(document).ready(function(){
$(window).on('load', function(){

    // ///////////////////////////////////////
    $(window).scroll(function(){
        let scroll =$(window).scrollTop(); 
        if(scroll > 1){
            $('.middle_gnb').css({
                opacity:"1"
            })
        }
        else{
            $('.middle_gnb').css({
                opacity:"0"
            })
        }
        
    })

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



 //////////////데이터 불러오기///////////////////////////
//////////////////////////////////////////////////////////  
    
    let cate_no =get_location("cate");

    mobile_load_data(cate_no,ITEM_LIST[cate_no].length ," ")


    /////////////////색뽑아오기////////////////////


        
    $(document).on('click','.search_shoes_color',function(){
        // 클릭한거랑 같은색 있는 아이템 넘버 뽑기
        let color_chk = $(this).attr('style').split(":")[1];
        let choose_color = [];

        for(let i=0; i<ITEM_LIST[cate_no].length ; i++){

            color_array =ITEM_LIST[cate_no][i].color.split(","); 

            for(let j=0; j<color_array.length; j++){  



                if(color_array[j] == color_chk){
                    choose_color.push(i)
                }
            }
        }

        /////////////////////////////////////////////
        $(`.${item_name[cate_no]}_sec`).empty();

        setTimeout(() => {
            color_data(cate_no, choose_color, $(this));
        }, 100);
    })
////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////메인베너//////////////////////////////////
    ////////////////////////색상전체보기///////////////////////////

    let show_all_chk=true;


    $('.showall').click(function(){
        //sb_count=1;
        show_all_chk =false;
        $('.best_item').empty();
        $('.main_shoes').empty();

            mobile_load_data(cate_no,ITEM_LIST[cate_no].length ," ")

        if(cate_no==0){
            loafer_all_show()
        }
        else{
            boots_all_show('.show_triger_btn');
        }

    })

    //////////////////////////////////////////////////////


   function loafer_all_show(){
    let index_t_img=$(`.${item_name[cate_no]}_main_img img`)
    let second_bn_leng=index_t_img.length;
    let sb_count=1;

    index_t_img.eq(0).css({opacity: 1});

        setInterval(()=>{

            index_t_img.eq((sb_count) % second_bn_leng).css({zIndex:99}).animate({opacity:1},1500)
            index_t_img.eq((sb_count - 1)% second_bn_leng).css({zIndex:9}).delay(1500).animate({opacity:0},0);
            sb_count+=1;
        },3000)
   }

    ///////////////////////////////////////////////////////////

  
    function boots_all_show(btn){
        let devide_len =$('.devide_box1').children('.pos_banner').length;
        let devide_box1= $('.devide_box1')
        let devide_box2= $('.devide_box2')
        let devide_timer=700;
        let devide_count=1
        let devide_count2=(devide_count + 1) % devide_len;


        devide_box1.children('.pos_banner').eq((devide_count- 1)).css({left:0});
        devide_box2.children('.pos_banner').eq(devide_count2 - 1).css({left:0})
        
        setInterval(function(){
            $(btn).trigger('click')
        },2500)
        
        $(btn).click(function(){
            
            let pic1_wid =devide_box1.children('.pos_banner').eq((devide_count -1) % devide_len).width();
            let pic2_wid =devide_box2.children('.pos_banner').eq((devide_count -1) % devide_len).width();
            devide_box1.children('.pos_banner').eq((devide_count) % devide_len).css({
                left: '100%'
            }).animate({
                left: 0
            }, devide_timer); 
            devide_box1.children('.pos_banner').eq((devide_count-1 ) % devide_len).animate({
                left:-pic1_wid
            }, devide_timer);
            devide_count += 1;
    
            
            //////////////////////////////////////
            devide_box2.children('.pos_banner').eq((devide_count2 - 1 ) % devide_len).animate({
                left:  -pic2_wid 
            
            }, devide_timer); 
            devide_box2.children('.pos_banner').eq(devide_count2 % devide_len).css({
                left:pic2_wid
            
            }).animate({
                left: "-10px"
            }, devide_timer); 
            devide_count2 =(devide_count + 1) % devide_len;
        })
    }


    loafer_all_show();
    boots_all_show('.triger_btn');
    ///////////////////////색상표 클릭///////////////////////////

    let direction = $('.color_title .updown_dir')
    let color_check = true;

    direction.click(function(){

        direction.toggleClass('updown_dir_active')
        if(color_check){
            color_check =false;
            $('.color_choose_case').animate({height:50})
        }
        else{
            color_check =true;
            $('.color_choose_case').animate({height:0})
        }
        
    })


   
})