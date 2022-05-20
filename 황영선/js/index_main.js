// main_banner 
let timer = 1000;
let c_index = 0;
let b_count = $('.m_banner').length;

for(let i=0; i<b_count; i++){
    $('.indi_box').append('<div class="indi"></div>')
}
$('.indi').eq(0).addClass('color_active')

$('#btn_next').click(function(event){
    event.stopPropagation()
    slider(c_index % b_count,'-100%', (c_index + 1) % b_count,'100%')
    c_index+=1;
})
$('#btn_prev').click(function(event){
    event.stopPropagation()
    slider(c_index % b_count,'100%', (c_index - 1) % b_count,'-100%')
    c_index-=1;
})


let int_box ="";
function auto_start(){
        int_box = setInterval(function(){
                $('#btn_next').trigger('click')
        },timer * 3)
}
auto_start()
$('.main_banner').hover(
        function(){
                // clearInterval(int_box)
                swiper.autoplay.stop()
        },
        function(){
                // auto_start()
                swiper.autoplay.start()
        }
)

function slider (c_ind, c_val, g_ind, g_val) {
    $('.btn_slide').css({pointerEvents: 'none'})
    setTimeout(function(){
            $('.btn_slide').css({pointerEvents: 'all'})
    }, timer + 300)

    $('.m_banner').eq(c_ind).css({
        zIndex: 1
    }).animate({
        left: c_val
    }, timer)
    $('.m_banner').eq(g_ind).css({
        left: g_val,
        zIndex: 99
    }).animate({
        left: 0
    }, timer)

    $('.indi').eq(c_ind).removeClass('indi_active');
    $('.indi').eq(g_ind).addClass('indi_active');
}

$('.indi').click(function(){
    if(c_index < $(this).index()){
        slider(c_index % b_count,'-100%',$(this).index(),'100%')
    }
    else if(c_index > $(this).index()){
        slider(c_index % b_count,'100%',$(this).index(),'-100%')
    }
    c_index = $(this).index();
})