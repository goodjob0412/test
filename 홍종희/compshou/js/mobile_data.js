const ITEM_LIST = [
    // 로퍼
     [
        {item_no:1, covered_src: '16.png', src: '1.png', title:'타이밍 심플 로퍼', o_price:26820,color:'#fcbeb3,#000000,#77451c'},
        {item_no:2, covered_src: '17.png', src: '2.png', title:'키높이 가죽로퍼', o_price:42120, color:'#fcbeb3,#000000,#77451c'},
        {item_no:3, covered_src: '18.png', src: '3.png', title:'매력충전 버클 펌프스', o_price:32000, color:'#f83422,#000000,#ffffff'},
        {item_no:4, covered_src: '19.png', src: '4.png', title:'투데이 골드 로퍼', o_price:26200, color:'#fcbeb3,#fff1dc,#ffffff'},
        {item_no:5, covered_src: '20.png', src: '5.png', title:'향기진주 메리제인슈즈', o_price:31200, color:'#251709,#000000,#ffffff'},
        {item_no:6, covered_src: '21.png', src: '6.png', title:'디셈버 골드로퍼', o_price:19600, color:'#f83422,#000000,#77451c'},
        {item_no:7, covered_src: '22.png', src: '7.png', title:'상큼해 심플 플랫', o_price:34600, color:'#fcbeb3,#000000,#251709'},
        {item_no:8, covered_src: '23.png', src: '8.png', title:'놀러와 스티치 플랫', o_price:37000, color:'#000000,#ffffff'},
        
        {item_no:9, covered_src: '24.png', src: '9.png', title:'스윗 리본 플랫', o_price:18500, color:'#fcbeb3'},
        {item_no:10, covered_src: '25.png', src: '10.png', title:'내꺼 몰드창 니트 플랫', o_price:25300, color:'#fcbeb3,#77451c,#f83422'},
        {item_no:11, covered_src: '26.png', src: '11.png', title:'선샤인 글리터 골드 플랫', o_price:31000, color:'#fff1dc,#77451c,#251709'},
        {item_no:12, covered_src: '27.png', src: '12.png', title:'헤일리 꼬임 로퍼', o_price:21000, color:'#77451c,#251709,#ffffff'},
        {item_no:13, covered_src: '28.png', src: '13.png', title:'코델리아 골드 로퍼', o_price:31200, color:'#fcbeb3,#000000,#251709'},
        {item_no:14, covered_src: '29.png', src: '14.png', title:'피아니스트 골드 로퍼', o_price:28000, color:'#f83422,#000000,#251709'},
        {item_no:15, covered_src: '30.png', src: '15.png', title:'트루 키높이 로퍼', o_price:26000, color:'#77451c,#fff1dc,#ffffff'},
     ]
     ,
    // 부츠.//
     [
        {item_no:1, covered_src: '16.png', src: '1.png', title:'세이브 워커', o_price:32820,color:'#000000,#ffffff'},
        {item_no:2, covered_src: '17.png', src: '2.png', title:'팬덤 심플 워커', o_price:42120, color:'#fcbeb3,#000000,#251709'},
        {item_no:3, covered_src: '18.png', src: '3.png', title:'클로젯 벨크로 워커', o_price:29000, color:'#fcbeb3,#77451c,#f83422'},
        {item_no:4, covered_src: '19.png', src: '4.png', title:'투데이 골드 로퍼', o_price:30000, color:'#fcbeb3,#fff1dc,#ffffff'},
        {item_no:5, covered_src: '20.png', src: '5.png', title:'파리지앵 워커', o_price:31200, color:'#251709,#000000,#ffffff'},
        {item_no:6, covered_src: '21.png', src: '6.png', title:'위키드 지퍼 워커', o_price:54000, color:'#f83422,#000000,#77451c'},
        {item_no:7, covered_src: '22.png', src: '7.png', title:'레이블 가죽 통굽 워커', o_price:65000, color:'#fcbeb3,#000000,#77451c'},
        {item_no:8, covered_src: '23.png', src: '8.png', title:'텍사스 골드 워커', o_price:42000, color:'#fcbeb3,#000000,#77451c'},
        
        {item_no:9, covered_src: '24.png', src: '9.png', title:'레전드 워커', o_price:19900, color:'#fcbeb3,#000000,#ffffff'},
        {item_no:10, covered_src: '25.png', src: '10.png', title:'일주일 워커', o_price:25300, color:'#251709,#000000,#ffffff'},
        {item_no:11, covered_src: '26.png', src: '11.png', title:'선샤인 글리터 골드 플랫', o_price:51000, color:'#fff1dc,#77451c,#251709'},
        {item_no:12, covered_src: '27.png', src: '12.png', title:'발리브 경량 워커', o_price:27000, color:'#77451c,#251709,#ffffff'},
        {item_no:13, covered_src: '28.png', src: '13.png', title:'윈티드 워커', o_price:21200, color:'#fcbeb3,#fff1dc,#ffffff'},
        {item_no:14, covered_src: '29.png', src: '14.png', title:'몬타나 몰드창 워커', o_price:48000, color:'#f83422,#000000,#251709'},
        {item_no:15, covered_src: '30.png', src: '15.png', title:'허쉬 통굽 워커', o_price:36000, color:'#fff1dc,#77451c,#251709'},
     ]
    
    
]
const item_name=['loafer','boots']
const item_title=['로퍼/플랫','부츠/롱부츠']
const item_color=['#fcbeb3','#000000','#ffffff','#77451c','#f83422','#fff1dc','#251709']


let color_array=[];
let color_list="";

// 함수 시ㅏㄱ/////
function mobile_load_data(item_index,qty,item){

    
    // 인덱스 1
    //let best_ul =` <ul class="best_ul ${item_name[item_index]}_sec"> </ul>`
    let best_ul =` <ul class="best_ul ${item_name[item_index]}_sec"> </ul>`
    $('.best_item').append(best_ul)
    // 인텍스 2

    // if(get_location("cate") !== null){
    $('.show_shoes .shoes_title').text(item_title[item_index])
    $('.shoes_type_name').eq(item_index).addClass('shoes_type_name_active')
        for(let i=0; i<qty ; i++){


            
            let list=`
            
                <li class="${item_name[item_index]}_ul_li">
                <div class="${item_name[item_index]}_pro_img">
                 
                        <a href="mobile_index3.html?cate=${item_index}&item_no=${ITEM_LIST[item_index][i].item_no}">
                            <img src="img/items/${item_name[item_index]}/${ITEM_LIST[item_index][i].src}" alt="" class="${item_name[item_index]}_pro_img_f">
                            <img src="img/items/${item_name[item_index]}/${ITEM_LIST[item_index][i].covered_src}" alt="" class="${item_name[item_index]}_pro_img_s">
                        </a>
                </div>
                <div class="${item_name[item_index]}_img_des">
                    <div class="${item_name[item_index]}_pro_name">${ITEM_LIST[item_index][i].title}</div>
                    <div class="${item_name[item_index]}_price">${ITEM_LIST[item_index][i].o_price.toLocaleString()}원</div>
                    <div class="${item_name[item_index]}_pro_color">
                        
                    </div>

                </div>
            </li>

            `

        
            //if(item_index == 0){

            //    $(`.common_sec`).append(list)
            //}
            //else if(item_index == 1){
                $(`.${item_name[item_index]}_sec`).append(list)
            //}

            //$(`.common_sec`).append(`.${item_name[item_index]}_sec`)



            if(item !== " "){
                
                color_array =ITEM_LIST[item_index][item].color.split(",");
            }
            else{
                color_array =ITEM_LIST[item_index][i].color.split(",");
            }


    // console.log(`i: ${i} 일때 색배열: ${color_array }`)      // [ #fcbeb3,#000000,#77451c ]    
            for(let j=0; j<color_array.length; j++){   
                color_list=` <div class="pro_color" style="background:${ color_array[j] }"></div>`
                $(`.${item_name[item_index]}_sec .${item_name[item_index]}_pro_color`).eq(i).append(color_list)
                $(`.${item_name[item_index]}_pick_color`).eq(i).append(color_list)
            }
        }
    
    // }
    // else {
    //     alert("잘못된 접근입니다.");
    //     location.href="index01.html"
    // }


    //////////////////////////////위에 부분///////////////////////
    
    if(item_index == 0){
        //$('.main_shoes').empty();
          let list =
          `
        <div class="loafer_main_img">
            <img src="img/index02/indexmain_mini2.png" alt="">
            <img src="img/index02/long_banner_mini1.png" alt="">
         
        </div>
          ` 
          
          $('.main_shoes').append(list)
    }
    else{
        //$('.main_shoes').empty();
        let list =
          `
          <div class="devide_box1">
            <img src="img/index02/main_edit1.png" alt="" class="pos_banner pos_banner1">
            <img src="img/index02/long_banner_mini2.png" alt="" class="pos_banner pos_banner1">
            <img src="img/index02/main_edit2.png" alt="" class="pos_banner pos_banner1">
        </div>
        <div class="devide_box2">
            <img src="img/index02/main_edit1.png" alt="" class="pos_banner pos_banner2">
            <img src="img/index02/long_banner_mini2.png" alt="" class="pos_banner pos_banner2">
            <img src="img/index02/main_edit2.png" alt="" class="pos_banner pos_banner2">
        </div>
               
          ` 
          
          $('.main_shoes').append(list)
    }
    

    
    
}

/////////////////////////색팔레트 클릭////////////////////////////////////


    for(let i=0; i <item_color.length; i ++){
        
        let list=    
            `
            <div class="search_shoes_color" style="background:${item_color[i]}"></div>
            `
        
        $('.color_pallete').append(list);
    }


///////////새로운 함수 /////////////////    

    let change_list="";
    function color_data(color_index ,choose_color, el){

        for(i=0; i<choose_color.length; i++) {
            
            let list =
            `
                <li class="${item_name[color_index]}_ul_li">
                <div class="${item_name[color_index]}_pro_img">
                
                        <a href="mobile_index3.html?cate=${color_index}&item_no=${ ITEM_LIST[color_index][ choose_color[i] ].item_no}">
                            <img src="img/items/${item_name[color_index]}/${ ITEM_LIST[color_index][ choose_color[i] ].src}" alt="" class="${item_name[color_index]}_pro_img_f">
                            <img src="img/items/${item_name[color_index]}/${ ITEM_LIST[color_index][ choose_color[i] ].covered_src}" alt="" class="${item_name[color_index]}_pro_img_s">
                        </a>
                </div>
                <div class="${item_name[color_index]}_img_des">
                    <div class="${item_name[color_index]}_pro_name">${ ITEM_LIST[color_index][ choose_color[i] ].title}</div>
                    <div class="${item_name[color_index]}_price">${ ITEM_LIST[color_index][ choose_color[i]].o_price.toLocaleString()}원</div>
                    <div class="${item_name[color_index]}_pro_color">
                        
                        </div>

                    </div>
                </li>
            `
            
            //$(`.${item_name[color_index]}_sec`).append(list);
            $(`.${item_name[color_index]}_sec`).append(list);
            
            let tmp_color =[];
            tmp_color = ITEM_LIST[color_index][choose_color[i]].color;
            tmp_color = tmp_color.split(",")

            //console.log(typeof(tmp_color))
            //console.log("tmp :" +tmp_color)
            for(let j=0; j<tmp_color.length; j++){ 
                //console.log("tmp22 :" +tmp_color[j])  
                change_list=` <div class="pro_color" style="background:${tmp_color[j]}"></div>`;
                $(`.${item_name[color_index]}_ul_li`).eq(i).find(`.${item_name[color_index]}_pro_color`).append(change_list);                                        
            }
    
        }
    }



///////링크 번호 보내주기//////////////////////

    function get_location(key){
        let url=location.href;
        
        url=url.split("?");

        if(url.length >1){
            url=url[1]
            url=url.split("#")
            url=url[0].split("&")

            for(let i=0; i <url.length; i++){
                let url_container=url[i].split("=");

                if(key == url_container[0]){
                    return url_container[1]
                }
            }
            return null;
            
            
        }
        else{
            return null;
        }

    
}

