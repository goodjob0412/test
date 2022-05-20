$(document).ready(function(){

	let sec_top = $('main').offset().top;

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
	})


//mouseenter

//text
	// $('.txt_area_pos > .txt_container').eq(0).addClass('opacity')
  $('.sig_name').mouseenter(function(){
		let txt_pos = $(this).index()
		$('.sig_txt').removeClass('opacity');
		$('.sig_txt').eq(txt_pos).addClass('opacity');
		

		// $('.txt_area_pos > .txt_container').addClass('opacity')

		// let txt_pos = $(this).index()

		// $('.txt_container').css({
		// 		opacity: 0
		// })
		
		// $('.txt_container').eq(txt_pos).css({
		// 		opacity: 1
		// })
	})

//img
	// $('.sig_box1_pos > img').eq(0).addClass('opacity')
  $('.sig_name').mouseenter(function(){
		
		let txt_pos = $(this).index()
		$('.sig_box1_pos > img').removeClass('opacity');
		$('.sig_box1_pos > img').eq(txt_pos).addClass('opacity');


		// $('.sig_box1_pos > img').addClass('opacity')

		// let txt_pos = $(this).index()

		// $('.sig_box1_pos > img').css({
		// 		opacity: 0
		// })
	
		// $('.sig_box1_pos > img').eq(txt_pos).css({
		// 		opacity: 1
		// })
	})

//color
	$('.sig_name').mouseleave(function(){
			$(this).removeClass('font_black')
	})
	$('.sig_name').mouseenter(function(){
			$(this).addClass('font_black')
	})

			



	//2_index///////////////////////////////////////////////////////////
	//text//

	$('.fra_names td').mouseenter(function(){
		// let txt_pos = $(this).index()
		// let txt_pos = $(this).data(tdIndex)
		let txt_pos = $(this).attr('data-tdIndex')

console.log(txt_pos)
		$('.fra_txt').removeClass('opacity');
		$('.fra_txt').eq(txt_pos).addClass('opacity');

		////////////////////////////////
		//img//
		$('.fra_box1_pos > img').removeClass('opacity');
		$('.fra_box1_pos > img').eq(txt_pos).addClass('opacity');

		//color//
		$(this).addClass('font_black')

	})

	// //img//
	// $('.fra_names td').mouseenter(function(){
		
	// 	let txt_pos = $(this).index()
	// 	$('.fra_box1_pos > img').removeClass('opacity');
	// 	$('.fra_box1_pos > img').eq(txt_pos).addClass('opacity');

	// })
	
	//color//
	$('.fra_names td').mouseleave(function(){
		$(this).removeClass('font_black')
	})
	// $('.fra_names td').mouseenter(function(){
	// 	$(this).addClass('font_black')
	// })








	//3_index//////////////////////////////////////////////////////////////
	//text//
	$('.nat_name').mouseenter(function(){
		let txt_pos = $(this).index()
		$('.nat_txt').removeClass('opacity');
		$('.nat_txt').eq(txt_pos).addClass('opacity');
	})

	//img//
	$('.nat_name').mouseenter(function(){
		
		let txt_pos = $(this).index()
		$('.nat_box1_pos > img').removeClass('opacity');
		$('.nat_box1_pos > img').eq(txt_pos).addClass('opacity');

	})
	
	//color//
	$('.nat_name').mouseleave(function(){
		$(this).removeClass('font_black')
	})
	$('.nat_name').mouseenter(function(){
		$(this).addClass('font_black')
	})





	$('.sig_index_menu a, .index_menu a, .nat_index_menu a').click(function(){  
   
        event.preventDefault();

        let href = $(this).attr('href'); 
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top - 50
        }, 300)

    })








});