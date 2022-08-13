$(document).ready(function(){

    
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




//////////////////헤더 줄 긋기///////////////////////////


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



///////////////////////////////////////////////////////////////
/////////////// 메인부분////////////////////////////////////////////


    let cate_no = get_location("cate");

  
    load_data(cate_no,ITEM_LIST[cate_no].length ," ")


    ///////////////////////////////////////////////////////

    item_show('.loafer_pro_img','.loafer_pro_img_s')
    item_show('.boots_pro_img','.boots_pro_img_s')

    function item_show(img,second_img){
        
        $(img).hover(function(){
            $(this).find(second_img).css({
                opacity:'1'
            })
        },function(){
            $(img).find(second_img).css({
                opacity:'0'
            })
        })
    }



    // ///////////////////////////////////////////////////////////////////////////데이터 부분
    ////////////////////메뉴판///////////////////////////////////////////
    
    let type_a=$('.shoes_type_name a')
    $('.shoes_type_name a').click(function(){
        type_a.removeClass('.shoes_type_name_active');
        $(this).addClass('shoes_type_name_active');
    })

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// 색상 고르기 //////////////////////////////////////////////


$(document).on('click','.search_shoes_color',function(){
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



///////////////////////////////////////////////////////////////


    let show_all =
    `
    <span class="showall">
            전체보기
    </span>
    `

    $('.color_name').append(show_all);

    $(document).on('click','.showall',function(){
        $(`.best_item`).empty();
        setTimeout(() => {
            load_data(cate_no,ITEM_LIST[cate_no].length ," ")
        }, 100);
    })

    ////////////////////////////////////////////////////

    


})