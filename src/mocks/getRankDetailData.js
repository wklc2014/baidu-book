import Mock from 'mockjs';

const result = {
  "errno": 0,
  "msg": "success",
  "data": {
    "total": 10,
    "hasMore": 1,
    "dispNum": "553",
    "novelList": [
      {
        "bookId": "4315646950",
        "title": "武炼巅峰",
        "author": "莫默",
        "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2476079491,3455683904&fm=179&app=35&f=JPEG?w=120&h=150&s=4C11629F88D361F3141891F70300C062",
        "description": "武之巅峰，是孤独，是寂寞，是漫漫求索，是高处不胜寒逆境中成长，绝地里求生，不屈不饶，才能堪破武之极道。凌霄阁试炼弟子兼扫地小厮杨开偶获一本无字黑书，从此踏上漫漫武道。",
        "tagList": [
          "男频",
          "玄幻",
          "东方玄幻"
        ],
        "category": "男频_玄幻_东方玄幻",
        "followersNum": 2408000,
        "function": "openDetail"
      },
      {
        "bookId": "4315646947",
        "title": "大主宰",
        "author": "天蚕土豆",
        "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=427061,1731159904&fm=179&app=35&f=JPEG?w=252&h=357&s=B4A308BC48D149E1480DA4CB0300F0B3",
        "description": "大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。无尽火域，炎帝执掌，万火焚苍穹。武境之内，武祖之威，震慑乾坤。西天之殿，百战之皇，战威无可敌。北荒之丘，万墓之地，不死之主镇天地。......少年自北灵境而出，骑九幽冥雀，闯向了那精彩绝伦的纷纭世界，主宰之路，谁主沉浮？大千世界，万道争锋，吾为大主宰。",
        "tagList": [
          "男频",
          "玄幻",
          "异界大陆"
        ],
        "category": "男频_玄幻_异界大陆",
        "followersNum": 2366000,
        "function": "openDetail"
      },
      {
        "bookId": "4315646985",
        "title": "完美世界",
        "author": "辰东",
        "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3038457145,3069906333&fm=179&app=35&f=JPG?w=267&h=354&s=FA310D8B4CD087ED0494FDAE0300B017",
        "description": "一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！一个少年从大荒中走出，一切从这里开始……",
        "tagList": [
          "男频",
          "玄幻",
          "异界大陆"
        ],
        "category": "男频_玄幻_异界大陆",
        "followersNum": 1893500,
        "function": "openDetail"
      },
      {
        "bookId": "4295122774",
        "title": "逆天邪神",
        "author": "火星引力",
        "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1194791423,435791944&fm=179&app=35&f=JPEG?w=244&h=325&s=9DA70D9E4E9365FF5D11D1E303003035",
        "description": "掌天毒之珠，承邪神之血，修逆天之力，一代邪神，君临天下！",
        "tagList": [
          "男频",
          "玄幻",
          "异界大陆"
        ],
        "category": "男频_玄幻_异界大陆",
        "followersNum": 1719000,
        "function": "openDetail"
      },
      {
        "bookId": "4315647122",
        "title": "凡人修仙传",
        "author": "忘语",
        "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=993396891,1686746003&fm=179&app=35&f=JPEG?w=267&h=356&s=E114C13B4DD245FFC60439EA0300B026",
        "description": "一个普通山村小子，偶然下进入到当地江湖小门派，成了一名记名弟子。他以这样身份，如何在门派中立足,如何以平庸的资质进入到修仙者的行列，从而笑傲三界之中！续篇《凡人修仙之仙界篇》已经在起点中文网上传了，欢迎大家继续支持哦！凡人修仙，风云再起时空穿梭，轮回逆转金仙太乙，大罗道祖三千大道，法则至尊《凡人修仙传》仙界篇，一个韩立叱咤仙界的故事，一个凡人小子修仙的不灭传说。",
        "tagList": [
          "男频",
          "仙侠",
          "幻想修仙"
        ],
        "category": "男频_仙侠_幻想修仙",
        "followersNum": 1739500,
        "function": "openDetail"
      },
      {
        "bookId": "4315646971",
        "title": "万古神帝",
        "author": "飞天鱼",
        "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=999565691,1505120102&fm=179&app=35&f=JPEG?w=267&h=356&s=B50F9D579AD471EF5A4045E103005030",
        "description": "八百年前，明帝之子张若尘，被他的未婚妻池瑶公主杀死，一代天骄，就此陨落。八百年后，张若尘重新活了过来，却发现曾经杀死他的未婚妻，已经统一昆仑界，开辟出第一中央帝国，号称“池瑶女皇”。池瑶女皇——统御天下，威临八方；青春永驻，不死不灭。张若尘站在诸皇祠堂外，望着池瑶女皇的神像，心中燃烧起熊熊的仇恨烈焰，“待我重修十三年，敢叫女皇下黄泉”。…………",
        "tagList": [
          "男频",
          "玄幻",
          "东方玄幻"
        ],
        "category": "男频_玄幻_东方玄幻",
        "followersNum": 1644000,
        "function": "openDetail"
      },
      {
        "bookId": "4315646965",
        "title": "全职法师",
        "author": "乱",
        "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=159379675,4051025935&fm=179&app=35&f=JPEG?w=208&h=258&s=10B3309B5C1157EF943D2BEE03003026",
        "description": "一觉醒来，世界巨变。藏匿于西湖下的图腾玄蛇，屹立时如摩天大厦。游荡在古都城墙外的亡灵大军，它们只听从皇陵下传出的低语。埃及金字塔中的冥王，它和它的部众始终觊觎着东方大地！伦敦有着伟大的驯龙世家。希腊帕特农圣山上，有神女祈福。威尼斯被誉为水系魔法之都。奈斯卡巨画从沉睡中苏醒。贺兰山风与雨侵蚀出的岩纹，组成一只眼，山脊是眶，数万年来凝视着上苍。",
        "tagList": [
          "男频",
          "玄幻",
          "异世大陆"
        ],
        "category": "男频_玄幻_异世大陆",
        "followersNum": 1769500,
        "function": "openDetail"
      },
      {
        "bookId": "4315646974",
        "title": "斗破苍穹",
        "author": "天蚕土豆",
        "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1714022596,3570728104&fm=179&app=35&f=JPEG?w=267&h=356&s=8111C5307F9247E35DC8A1C30300A0B7",
        "description": "这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！新书等级制度：斗者，斗师，大斗师，斗灵，斗王，斗皇，斗宗，斗尊，斗圣，斗帝。……吴磊、林允主演的同名电视剧9月3日起周一到周三每晚22：00登陆湖南卫视，腾讯视频全网独播。",
        "tagList": [
          "男频",
          "玄幻",
          "东方玄幻"
        ],
        "category": "男频_玄幻_东方玄幻",
        "followersNum": 1722000,
        "function": "openDetail"
      },
      {
        "bookId": "4315647161",
        "title": "斗罗大陆",
        "author": "唐家三少",
        "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=545138224,2283895712&fm=179&app=35&f=JPEG?w=248&h=357&s=5280EDA648D245EF5EB47C750300F051",
        "description": "唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却发现没有死，反而以另外一个身份来到了另一个世界，一个属于武魂的世界，名叫斗罗大陆。这里没有魔法，没有斗气，没有武术，却有神奇的武魂。这里的每个人，在自己六岁的时候，都会在武魂殿中令武魂觉醒。武魂有动物，有植物，有器物，武魂可以辅助人们的日常生活。而其中一些特别出色的武魂却可以用来修炼并进行战斗，这个职业，是斗罗大陆上最为强大也是最荣耀的职业——魂师!当唐门暗器来到斗罗大陆，当唐三武魂觉醒，他能否在这片武魂的世界再铸唐门的辉煌？他能否成为这个世界的主宰：神?",
        "tagList": [
          "男频",
          "奇幻",
          "西方奇幻"
        ],
        "category": "男频_奇幻_西方奇幻",
        "followersNum": 1667500,
        "function": "openDetail"
      },
      {
        "bookId": "4315647019",
        "title": "武动乾坤",
        "author": "天蚕土豆",
        "cover": "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/boxapp_novel/wh%3D267%2C357/sign=2d631b978935e5dd9079addd40f18bdc/4e4a20a4462309f7f2f356d77e0e0cf3d6cad653.jpg",
        "description": "修炼一途，乃窃阴阳，夺造化，转涅盘，握生死，掌轮回。武之极，破苍穹，动乾坤！",
        "tagList": [
          "男频",
          "玄幻",
          "古典仙侠"
        ],
        "category": "男频_玄幻_古典仙侠",
        "followersNum": 1738000,
        "function": "openDetail"
      }
    ]
  },
  "s_log": "018d91d1732b1fd51e844155d0abcea2",
  "s_father_log": "018d91d1732b1fd51e844155d0abcea2",
  "s_root_log": "018d91d1732b1fd51e844155d0abcea2"
}

Mock.mock('/api/getRankDetailData', 'get', (url, type, body) => {
  return {
    success: true,
    data: result.data,
  };
})
