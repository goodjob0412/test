$(document).ready(function(){

	

	$('.top_L > a:nth-child(2)').mouseenter(function(){
		$('.top_L > a:nth-child(2)').addClass('top_active')
	})
	$('.top_L > a:nth-child(2)').mouseleave(function(){
		$('.top_L > a:nth-child(2)').removeClass('top_active')
	})






	let sec_top = $('main').offset().top;
	let b_story_o_top = $('.sec_brand_story').offset().top;
	let journal_1_o_top = $('.sec_journal_1').offset().top;
	let journal_2_o_top = $('.sec_journal_2').offset().top;
	let curation_1_o_top = $('.curation_1').offset().top;
	let curation_2_o_top = $('.curation_2').offset().top;
	let fragrance_o_top = $('.fragrance').offset().top;
	let body_o_top = $('.body').offset().top;
	let rest_o_top = $('.rest').offset().top;

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


			if(s_top + 600 >= b_story_o_top) {
				$('.sec_brand_story').addClass('sec_active')
			}
			if(s_top + 600 >= journal_1_o_top) {
				$('.sec_journal_1').addClass('sec_active')
			}
			if(s_top + 600 >= journal_2_o_top) {
				$('.sec_journal_2').addClass('sec_active')
			}
			if(s_top + 600 >= curation_1_o_top) {
				$('.curation_1').addClass('sec_active')
			}
			if(s_top + 600 >= curation_2_o_top) {
				$('.curation_2').addClass('sec_active')
			}
			if(s_top + 600 >= fragrance_o_top) {
				$('.fragrance').addClass('sec_active')
			}
			if(s_top + 600 >= body_o_top) {
				$('.body').addClass('sec_active')
			}
			if(s_top + 600 >= rest_o_top) {
				$('.rest').addClass('sec_active_rest')
			}
})
			


});