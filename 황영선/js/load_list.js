const B_LIST= [
    // main_menu 100%
    [
        {cate_no:0, item_no: 1, title: ''}
    ],
    [
        {cate_no:1, item_no: 1, title: ''}
    ],
    [
        {cate_no:2, item_no: 1, title: ''}
    ],
    [
        {cate_no:3, item_no: 1, title: ''}
    ],
    // outer 0
    [
        {cate_no:4, item_no: 1, title: '코트'}, 
        {cate_no:4, item_no: 2, title: '자켓'}, 
        {cate_no:4, item_no: 3, title: '점퍼/집업'}, 
        {cate_no:4, item_no: 4, title: '가디건'}, 
        {cate_no:4, item_no: 5, title: '베스트'}
    ],
    // top 1
    [
        {cate_no:5, item_no: 1, title: '긴팔'}, 
        {cate_no:5, item_no: 2, title: '니트'}, 
        {cate_no:5, item_no: 3, title: '후드'}, 
        {cate_no:5, item_no: 4, title: '반팔'}, 
        {cate_no:5, item_no: 5, title: '나시'}
    ],
    // blouse 2
    [
        {cate_no:6, item_no: 1, title: '블라우스'}, 
        {cate_no:6, item_no: 2, title: '셔츠'}
    ],
    // dress 3
    [
        {cate_no:7, item_no: 1, title: '미니&미디'}, 
        {cate_no:7, item_no: 2, title: '롱'}
    ],
    // pants 4
    [
        {cate_no:8, item_no: 1, title: '데님'}, 
        {cate_no:8, item_no: 2, title: '팬츠'}, 
        {cate_no:8, item_no: 3, title: '슬랙스'}, 
        {cate_no:8, item_no: 4, title: '레깅스'}, 
        {cate_no:8, item_no: 5, title: '반바지'}
    ],
    // skirt 5
    [
        {cate_no:9, item_no: 1, title: '미니&미디'}, 
        {cate_no:9, item_no: 2, title: '롱'}
    ],
    // underwear 6
    [
        {cate_no:10, item_no: 1, title: '브라'}, 
        {cate_no:10, item_no: 2, title: '팬티'}, 
        {cate_no:10, item_no: 3, title: '보정속옷'}, 
        {cate_no:10, item_no: 4, title: '파자마'}, 
        {cate_no:10, item_no: 5, title: '나시/속바지'}
    ],
    // shoes 7
    [
        {cate_no:11, item_no: 1, title: '플랫/로퍼'}, 
        {cate_no:11, item_no: 2, title: '부츠'}, 
        {cate_no:11, item_no: 3, title: '힐/펌프스'}, 
        {cate_no:11, item_no: 4, title: 'ACC'},
    ],
    // acc 8
    [
        {cate_no:12, item_no: 1, title: '양말/스타킹'}, 
        {cate_no:12, item_no: 2, title: '밸트'}, 
        {cate_no:12, item_no: 3, title: '가방'}, 
        {cate_no:12, item_no: 4, title: '악세서리'},
        {cate_no:12, item_no: 5, title: '그외'}
    ]
]
const M_LIST = [
    // menu
    // best 0
    [
        {cate_no:0, item_no: 1, item_title:'단즈 홑겹 루즈핏 자켓 65109', o_price:'59,000', s_price:'54,600', color:['brown', 'black'],src:'../사진/main/best (1).gif'},
        {cate_no:0, item_no: 2, item_title:'[4천장 돌파] 쿨랭 숏앤롱 히든밴딩 스판 슬랙스 59698', o_price:'33,000', s_price:'30,800', color:['blue', 'black'],src:'../사진/main/best (2).gif'},
        {cate_no:0, item_no: 3, item_title:'[1천장 돌파] 하기 반팔 자켓 59468', o_price:'52,800', s_price:'50,000', color:['white', 'brown', 'black'],src:'../사진/main/best (3).gif'},
        {cate_no:0, item_no: 4, item_title:'[4천장 돌파] 데잇 린넨 루즈핏 남방 58906', o_price:'27,000', s_price:'24,600', color:['pink'],src:'../사진/main/best (4).gif'},
        {cate_no:0, item_no: 5, item_title:'[1만장 돌파] 올데이 루즈핏 미디&롱 티셔츠 63820', o_price:'14,000', s_price:'12,800', color:['white', 'black'],src:'../사진/main/best (5).gif'}
    ],
    // new arrivals 1
    [
        {cate_no:1, item_no: 1, item_title:'리 블랑 노쿠 굿위드 65126', o_price:'55,000', s_price:'50,800', color:['민트','red', 'black'],src:'1.gif'},
        {cate_no:1, item_no: 2, item_title:'변트리 나염 루즈핏 65025', o_price:'23,000', s_price:'21,700', color:['white','yellogreen', 'black'],src:'2.gif'},
        {cate_no:1, item_no: 3, item_title:'해펀턴 시어서커 파자마 65037', o_price:'35,400', s_price:'32,300', color:['야광그린', 'purple'],src:'3.gif'},
        {cate_no:1, item_no: 4, item_title:'코로 버튼 5부 65128', o_price:'37,500', s_price:'34,200', color:['skyblue'],src:'4.gif'},
        {cate_no:1, item_no: 5, item_title:'뷔스티에 65149', o_price:'27,000', s_price:'24,600', color:['white', '야광그린', 'black'],src:'5.gif'},
        {cate_no:1, item_no: 6, item_title:'단즈홀 겹 루즈 핏 65109', o_price:'59,900', s_price:'54,600', color:['베이지', 'black'],src:'6.gif'},
        {cate_no:1, item_no: 7, item_title:'유레이 버튼 린넨 롱 65063', o_price:'30,000', s_price:'27,100', color:['베이지','brown', 'black'],src:'7.gif'},
        {cate_no:1, item_no: 8, item_title:'모리나 유브이넥 모달 65001', o_price:'17,400', s_price:'15,900', color:['베이지', '민트', 'black'],src:'8.gif'},
        {cate_no:1, item_no: 9, item_title:'셀러 퍼프 린 턴 64948', o_price:'34,000', s_price:'31,700', color:['white','black'],src:'9.gif'},
        {cate_no:1, item_no: 10, item_title:'모스트 65164', o_price:'39,600', s_price:'36,100', color:['white','black'],src:'10.gif'},
        {cate_no:1, item_no: 11, item_title:'반팔 듀린 린드 65125', o_price:'49,000', s_price:'44,600', color:['베이지', 'black'],src:'11.gif'},
        {cate_no:1, item_no: 12, item_title:'텔디 플라워 모델 통통 64989', o_price:'39,900', s_price:'36,400', color:['베이지', 'black'],src:'12.gif'},
        {cate_no:1, item_no: 13, item_title:'카미유 버튼발발 65059', o_price:'39,900', s_price:'36,400', color:['민트', 'black'],src:'13.gif'},
        {cate_no:1, item_no: 14, item_title:'땡 떙 떙 떙 59491', o_price:'34,000', s_price:'31,700', color:['blue'],src:'14.gif'},
        {cate_no:1, item_no: 15, item_title:'톰빔 플레어롱 65003', o_price:'24,000', s_price:'21,900', color:['베이지',"green",'black'],src:'15.gif'},
        {cate_no:1, item_no: 16, item_title:'율아뒤트임 0.6511', o_price:'32,000', s_price:'29,200', color:['베이지','black'],src:'16.gif'},
        {cate_no:1, item_no: 17, item_title:'리 블랑 노쿠 굿위드 65126', o_price:'55,000', s_price:'50,800', color:['민트','red', 'black'],src:'17.gif'},
        {cate_no:1, item_no: 18, item_title:'변트리 나염 루즈핏 65025', o_price:'23,000', s_price:'21,700', color:['white','yellogreen', 'black'],src:'18.gif'},
        {cate_no:1, item_no: 19, item_title:'해펀턴 시어서커 파자마 65037', o_price:'35,400', s_price:'32,300', color:['야광그린', 'purple'],src:'19.gif'},
        {cate_no:1, item_no: 20, item_title:'코로 버튼 5부 65128', o_price:'37,500', s_price:'34,200', color:['skyblue'],src:'20.gif'},
        {cate_no:1, item_no: 21, item_title:'뷔스티에 65149', o_price:'27,000', s_price:'24,600', color:['white', '야광그린', 'black'],src:'21.gif'},
        {cate_no:1, item_no: 22, item_title:'단즈홀 겹 루즈 핏 65109', o_price:'59,900', s_price:'54,600', color:['베이지', 'black'],src:'22.gif'},
        {cate_no:1, item_no: 23, item_title:'유레이 버튼 린넨 롱 65063', o_price:'30,000', s_price:'27,100', color:['베이지','brown', 'black'],src:'23.gif'},
        {cate_no:1, item_no: 24, item_title:'모리나 유브이넥 모달 65001', o_price:'17,400', s_price:'15,900', color:['베이지', '민트', 'black'],src:'24.gif'},
        {cate_no:1, item_no: 25, item_title:'셀러 퍼프 린 턴 64948', o_price:'34,000', s_price:'31,700', color:['white','black'],src:'25.gif'},
        {cate_no:1, item_no: 26, item_title:'모스트 65164', o_price:'39,600', s_price:'36,100', color:['white','black'],src:'26.gif'},
        {cate_no:1, item_no: 27, item_title:'반팔 듀린 린드 65125', o_price:'49,000', s_price:'44,600', color:['베이지', 'black'],src:'27.gif'},
        {cate_no:1, item_no: 28, item_title:'텔디 플라워 모델 통통 64989', o_price:'39,900', s_price:'36,400', color:['베이지', 'black'],src:'28.gif'},
        {cate_no:1, item_no: 29, item_title:'카미유 버튼발발 65059', o_price:'39,900', s_price:'36,400', color:['민트', 'black'],src:'29.gif'},
        {cate_no:1, item_no: 30, item_title:'땡 떙 떙 떙 59491', o_price:'34,000', s_price:'31,700', color:['blue'],src:'30.gif'}
    ]
]
const A_LIST= [
    // search_bar
    // 인기검색어 9
    [
        {cate_no:0, item_no: 1, title: '가디건', good: '' }, 
        {cate_no:0, item_no: 2, title: '원피스', good: '' }, 
        {cate_no:0, item_no: 3, title: '트위드', good: '' }, 
        {cate_no:0, item_no: 4, title: '블라우스', good: 3 }, 
        {cate_no:0, item_no: 5, title: '투피스', good: 8 }, 
        {cate_no:0, item_no: 6, title: '스커트', good: 6 }, 
        {cate_no:0, item_no: 7, title: '뷔스티에', good: 3 }, 
        {cate_no:0, item_no: 8, title: '크롭', good: 1 }, 
        {cate_no:0, item_no: 9, title: '자켓', good: 4 }, 
        {cate_no:0, item_no: 10, title: '나시', good: 6 }
    ],
    // 급상승 10
    [
        {cate_no:1, item_no: 1, title: '새틴', good: 592 }, 
        {cate_no:1, item_no: 2, title: '롱가디건', good: 162 }, 
        {cate_no:1, item_no: 3, title: '쉬폰원피스', good: 111 }, 
        {cate_no:1, item_no: 4, title: '여름가디건', good: 106 }
    ]
]
const menu_array = ['BEST','NEW','66~120SIZE','MADE','OUTER','TOP','BLOUSE','DRASS','PANTS','SKIRT','UNDER','SHOES','ACC'];