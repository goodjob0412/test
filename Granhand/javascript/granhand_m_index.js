$(document).ready(function(){


	$('.close_btn').click(function(){
		$('.modal').removeClass('display');

		
		$('.wrap').css({height: 'auto'})
		$('html, body').animate({
			scrollTop: tmp+"px"
		}, 0)
	})




//sec_1
		let tmp = $(window).scrollTop();
	$('.sig_box').click(function(){
		// let txt_pos = $(this).index()
		let txt_pos = $(this).attr('data-tdIndex')
		console.log("txt_pos: " + txt_pos)
		$('.m_img > img').removeClass('display')
		$('.m_img > img').eq(txt_pos).addClass('display')
		$('.txt_container').removeClass('display')
		$('.txt_container').eq(txt_pos).addClass('display')

		
		//$('.modal').removeClass('display');
		$('.modal').addClass('display');
 
		tmp = $(window).scrollTop();

		
		// $('.wrap').css({height: '100vh'})

	})
 

	$('.modal').click(function(){
		$('.modal').removeClass('display');

		// $('.wrap').css({pointerEvents:'auto'})

	})

	$('.modal_body').click(function(event){
		event.stopPropagation();
	})

	
		 



	$('.sig_index_menu a').click(function(){  
   
		event.preventDefault();

		let href = $(this).attr('href'); 
		$('html, body').stop().animate({
				scrollTop: $(href).offset().top - 50
		}, 300)

})

})