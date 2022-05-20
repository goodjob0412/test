$(document).ready(function(){

    const bn = $('.banner');
    let bn_length = bn.length;

    for(let i=0; i<bn_length; i++) {
        $('.pagination').append(`<div class="indi"></div>`)
    }
    $('.indi').first().addClass('indi_active');

   
    let bn_index = 0; 
    let timer = 2000;
    function slide(o_bang, o_pos, c_bang, c_pos) {
        
        $('.btn_slide, .indi').css({pointerEvents: 'none'})
        setTimeout(()=>{
            $('.btn_slide, .indi').css({pointerEvents: 'all'})
        }, timer )

        bn.eq(o_bang).animate({
            left: o_pos
        }, timer)

        bn.eq(c_bang).css({
            left: c_pos
        }).animate({
            left: 0
        }, timer)

        $('.indi').eq(o_bang).removeClass('indi_active')
        $('.indi').eq(c_bang).addClass('indi_active')

    }
    $(document).on('click', '#btn_next', function(){
        slide(bn_index % bn_length,'-100%',(bn_index+1) % bn_length,'100%' )
        bn_index+=1;
    })

    $(document).on('click', '#btn_prev', function(){
        slide(bn_index % bn_length,'100%',(bn_index-1) % bn_length,'-100%');
        bn_index-=1;
    })

    $(document).on('click', '.indi', function(){
        if( $(this).index() > bn_index ) {
            slide(bn_index % bn_length,'-100%',$(this).index(),'100%' )
        }
        else if($(this).index() < bn_index) {
            slide(bn_index % bn_length,'100%',$(this).index(),'-100%' )
        }
 
        bn_index=$(this).index();
    })

    let int_box ="";

    function auto_slide() {
        int_box = setInterval(function(){
            $('#btn_next').trigger('click')
        }, timer + 1000)
    }
    auto_slide()

    $('.fragrance_banner').hover(function(){
        clearInterval(int_box);
    }, function(){
        auto_slide()
    })



})