$(document).ready(function(){

	let sec_top = $('main').offset().top;


    let bs_txt = $('.text_area').offset().top;
    let bs_list = $('.bs_list').offset().top;
    let se_list = $('.se_list').offset().top;
   





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
