$(document).ready(function(){

	let sec_top = $('main').offset().top;


    let bs_txt = $('.text_area').offset().top;
    let bs_list = $('.bs_list').offset().top;
    let se_list = $('.se_list').offset().top;
   


        //헤더
	$(window).scroll(function(){
		let s_top = $(window).scrollTop();
				
		console.log(sec_top, s_top)

		if(0 < s_top) {
			$('header').addClass('header_active')
		}
		else if(0 >= s_top) {
			$('header').removeClass('header_active')
		}

		$('.background_img').css({
			transform: `translate(-50%, -50%) rotate(${s_top / 60}deg)`
		});



        //메인

        if(s_top + 600 >= bs_txt) {
            $('.text_area').addClass('sec_active')
        }
        if(s_top + 600 >= bs_list) {
            $('.bs_list').addClass('op_1')
        }
        if(s_top + 600 >= se_list) {
            $('.se_list').addClass('op_1')
        }

	})  


})