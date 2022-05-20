const ITEM_LIST = [
    // 욕실
        [
            {item_no: 0, src: '샴푸볼1.jpg', title: '샴푸볼', o_price: [12000], s_price: [], opt: [], color: [], info: [true, true, false]},
            {item_no: 1, src: '스테인레스_칫솔걸이1.jpg', title: '스테인레스 칫솔걸이', o_price: [7000], s_price: 5500, opt: [], color: [], info: [true, false, true]}, 
            {item_no: 2, src: '조르단칫솔1.jpg', title: '조르단 칫솔', o_price: ['4000', '3200'], s_price: [], opt: ['성인', '키즈'], color: ['핑크', '그린', '블루', '민트'], info: [false, true, true]}, 
            {item_no: 3, src: '지구샵_고체치약1.jpg', title: '지구샵 고체 치약', o_price: ['3000', '8900', '12000'], s_price: [], opt: ['10정', '30정','50정'], color: [], info: [true, true, true]}, 
            {item_no: 4, src: '치실1.jpg', title: '조르단 치실', o_price: ['8000'], s_price: 7500, opt: [], color: [], info: [true, false, true]}, 
            {item_no: 5, src: '칫솔뚜껑1.jpg', title: '실리콘 칫솔 뚜껑', o_price: ['7000'], s_price: [], opt: [], color: [], info: [true, true, true]}, 
            {item_no: 6, src: '칫솔파우치1.jpg', title: '칫솔 파우치', o_price: ['3000'], s_price: [], opt: [], color: [], info: [true, true, false]},
            {item_no: 7, src: '타이거릴리_샴푸바1.jpg', title: '타이거릴리 샴푸바', o_price: ['13000', '17000'], s_price: 11900, opt: ['120g', '150g'], color: ['그린','핑크'], info: [true, true, true]} 
            
        ],
    // 주방
        [
            {item_no: 0, src: '고무장갑1.jpg', title: '고무장갑', o_price: ['2000'], s_price: [], opt: [], color: [], info: [true, false, false]},
            {item_no: 1, src: '밀랍랩1.jpg', title: '밀랍랩', o_price: ['12000'], s_price: [], opt: [], color: [], info: [false, true, false]}, 
            {item_no: 2, src: '삼베수세미1.jpg', title: '삼베 수세미 3개입', o_price: ['5000'], s_price: 4500, opt: [], color: [], info: [true, true, false]}, 
            {item_no: 3, src: '세척솔1.jpg', title: '보틀 세척솔', o_price: ['5000'], s_price: [], opt: [], color: [], info: [true, true, false]}, 
            {item_no: 4, src: '소창티백1.jpg', title: '소창 티백 5개입 소 / 중', o_price: ['8000', '12000'], s_price: [], opt: ['소', '중'], color: [], info: [true, false, false]}, 
            {item_no: 5, src: '주방비누1.jpg', title: '주방 비누', o_price: ['7000'], s_price: 6300, opt: [], color: [], info: [true, false, false]}, 
            {item_no: 6, src: '커트러리1.jpg', title: '커트러리', o_price: ['3000', '2500', '3000', '3500'], s_price: [], opt: ['잼 나이프', '과일 포크', '잼 스푼 소', '잼스푼 중'], color: [], info: [false, false, false]},
            {item_no: 7, src: '컵받침1.jpg', title: '티 코스터', o_price: ['7000','9000'], s_price: [], opt: ['지름 12cm', '지름 15cm'], color: [], info: [false, false, false]}
        ],
    // 일상
        [
            {item_no: 0, src: '메모패드1.jpg', title: '비목 메모패드', o_price: ['2000'], s_price: [], opt: [], color: [], info: [true, true, false]},
            {item_no: 1, src: '비기컵1.jpg', title: '스토조 비기컵', o_price: ['13000'], s_price: [], opt: [], color: ['핑크', '그린', '블랙'], info: [false, true, false]}, 
            {item_no: 2, src: '빨대_세척솔1.jpg', title: '빨대 세척솔', o_price: ['2000'], s_price: [], opt: [], color: [], info: [false, false, false]}, 
            {item_no: 3, src: '빨대_파우치1.jpg', title: '빨대 파우치', o_price: ['3000'], s_price: [], opt: [], color: ['블루', '레드'], info: [true, true, false]}, 
            {item_no: 4, src: '스테인레스빨대1.jpg', title: '스테인레스 빨대', o_price: ['2500'], s_price: [], opt: ['직선 24cm', '곡선 23cm'], color: [], info: [false, true, false]}, 
            {item_no: 5, src: '스토조보틀1.jpg', title: '스토조 보틀', o_price: ['15000'], s_price: 13900, opt: [], color: ['핑크', '그린'], info: [true, false, false]}, 
            {item_no: 6, src: '실리콘빨대1.jpg', title: '실리콘 빨대', o_price: ['2500'], s_price: [], opt: [], color: ['레드', '민트', '옐로우', '핑크'], info: [true, true, false]},
            {item_no: 7, src: '유리빨대1.jpg', title: '유리 빨대', o_price: ['2500'], s_price: [], opt: ['길이 23cm', '길이 25cm'], color: [], info: [true, true, false]}
        ],
    // 여성
        [
            {item_no: 0, src: '면생리대_대형1.jpg', title: '면 생리대 중/ 대형', o_price: ['8900', '9900'], s_price: [], opt: ['중형', '대형'], color: ['블루', '퍼플'], info: [true, false, false]},
            {item_no: 1, src: '세탁비누1.jpg', title: '세탁 비누', o_price: ['3500'], s_price: 2800, opt: [], color: [], info: [false, true, false]}, 
            {item_no: 2, src: '오일세럼1.jpg', title: '오일 세럼', o_price: ['17500'], s_price: [], opt: [], color: [], info: [true, true, false]}, 
            {item_no: 3, src: '월경컵1.jpg', title: '월경컵', o_price: ['34900', '38900'], s_price: [], opt: ['중형', '대형'], color: ['옐로우', '핑크', '스카이블루'], info: [true, true, false]}, 
            {item_no: 4, src: '유기농_탐폰1.jpg', title: '유기농 탐폰', o_price: ['14900'], s_price: [], opt: [], color: [], info: [true, false, false]}, 
            {item_no: 5, src: '클렌징바1.jpg', title: '퍼퓸밤', o_price: ['15000'], s_price: 13900, opt: [], color: ['핑크', '그린'], info: [true, false, false]}, 
            {item_no: 6, src: '퍼퓸밤1.jpg', title: '퍼퓸밤', o_price: ['17900'], s_price: [], opt: ['베르가못', '파춀리', '샌달우드'], color: [], info: [true, true, false]},
            {item_no: 7, src: '화장솜1.jpg', title: '화장솜', o_price: ['12900'], s_price: 10900, opt: [], color: [], info: [true, true, false]}
        ],
        // 음식
        [
            {item_no: 0, src: '그레놀라1.jpg', title: '그레놀라', o_price: ['13800'], s_price: [], opt: [], color: [], info: [false, false, false]},
            {item_no: 1, src: '늙은호박_분말1.jpg', title: '늙은 호박 분말', o_price: ['12300'], s_price: [], opt: [], color: [], info: [true, true, false]}, 
            {item_no: 2, src: '우엉차1.jpg', title: '우엉차', o_price: ['8700'], s_price: [], opt: [], color: [], info: [true, false, false]}, 
            {item_no: 3, src: '젤리1.jpg', title: '곰돌이 젤리', o_price: ['3800'], s_price: 2900, opt: ['사과', '블루베리'], color: [], info: [true, true, false]}, 
            {item_no: 4, src: '진피녹차1.jpg', title: '진피 녹차', o_price: ['11700'], s_price: [], opt: [], color: [], info: [true, false, false]}, 
            {item_no: 5, src: '초콜릿1.jpg', title: '초콜릿 다크 / 밀크', o_price: ['3800'], s_price: [], opt: ['다크', '밀크'], color: [], info: [false, true, false]}, 
            {item_no: 6, src: '코코넛칩1.jpg', title: '코코넛칩', o_price: ['2500'], s_price: [], opt: [], color: [], info: [false, false, false]},
            {item_no: 7, src: '티_버라이어티팩1.jpg', title: '티 버라이어티 팩', o_price: ['13500'], s_price: 12700, opt: [], color: [], info: [true, true, false]}
        ]
    ];
    const MENU_TITLE = ["욕실","주방","일상","여성용품","음식"]
    