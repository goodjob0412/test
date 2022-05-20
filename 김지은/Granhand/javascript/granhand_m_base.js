$(document).ready(function(){
    
    let ham_active = true;
    const timer = 200;

    //햄 버튼 모션
    $('.ham_btn').click(function(){

        if(ham_active) {
            $('.grid_1').css({
                transform: 'translateY(13.5px)'
            })
            setTimeout(function(){
                $('.grid_1').css({
                    transform: 'translateY(13.5px) rotate(45deg)'
                })
            }, timer)

            setTimeout(function(){
                $('.grid_2').css({
                    display: 'none'
                })
            }, timer)

            $('.grid_3').css({
                transform: 'translateY(-13.5px)'
            })
            setTimeout(function(){
                $('.grid_3').css({
                    transform: 'translateY(-13.5px) rotate(-45deg)'
                })
            }, timer)
            
            ham_active=false
        }
        else {
            $('.grid_1').css({transform: 'translateY(13.5px) rotate(0)'
            })
            setTimeout(function(){
                $('.grid_1').css({
                    transform: 'translateY(0)'
                })
            }, timer)

            setTimeout(function(){
                $('.grid_2').css({
                    display: 'block'
                })
            }, timer)

            $('.grid_3').css({
                transform: 'translateY(-13.5px) rotate(0)'
            })
            setTimeout(function(){
                $('.grid_3').css({
                    transform: 'translateY(0)'
                })
            }, timer)

            ham_active=true
        }
    })

    //햄 판 나타나기

    let ham_chk = true;
    $('.ham_btn').click(function(){
        $('.ham_pan').toggleClass('ham_active')
    })

})